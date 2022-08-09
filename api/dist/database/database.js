"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
console.log(process.env.DATABASE_HOST);
exports.db = new sequelize_1.Sequelize("challenge_nl", "postgres", "24892165", {
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    logging: false,
});
