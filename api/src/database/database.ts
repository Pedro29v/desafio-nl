import { Sequelize } from "sequelize";

console.log(process.env.DATABASE_HOST);

export const db = new Sequelize("challenge_nl", "postgres", "24892165", {
  host: process.env.DATABASE_HOST,
  dialect: "postgres",
  logging: false,
});
