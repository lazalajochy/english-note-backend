import { db } from "../config/conn";
import { DataTypes } from "sequelize";

export const Word = db.define("words",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    word:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})