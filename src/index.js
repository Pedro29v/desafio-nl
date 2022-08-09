import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    sequelize.authenticate();
    console.log("La conexion ha sido establecida");

    app.listen(3000);
    console.log("Listen on port", 3000);
  } catch (error) {}
}

main();
