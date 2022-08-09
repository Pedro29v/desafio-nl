import { DataType, DataTypes } from "sequelize";
import sequelize from "../database/database.js";

sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
