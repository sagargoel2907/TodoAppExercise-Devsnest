import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Todo extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    dueDate: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Todo",
    createdAt: false,
    updatedAt: false,
  }
);

export default Todo;

// {
//     id: number,
//     title: string,
//     description: string,
//     dueDate: string,
//     completed: boolean,
//     priority: number,
//   }
