"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskModel = void 0;
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
exports.taskModel = database_1.db.define("Task", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    priority: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false });
