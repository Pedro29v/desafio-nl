import express from "express";
import "./models/Task.js";
import { db } from "./database/database";
import indexRoute from "./routes/index";
import dotenv from "dotenv";
dotenv.config();
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(indexRoute);

async function main() {
  try {
    await db.sync({ force: true });

    app.listen(process.env.DATABASE_PORT, () => {
      console.log("server listen on port", process.env.DATABASE_PORT);
    });
  } catch (error) {}
}

main();

export default app;
