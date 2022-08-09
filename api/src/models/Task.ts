import { db } from "../database/database";
import { DataTypes } from "sequelize";

export const taskModel = db.define(
  "Task",
  {
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
  },
  { timestamps: false }
);
