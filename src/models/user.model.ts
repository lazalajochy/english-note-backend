import { db } from "../config/conn";
import { DataTypes } from "sequelize";

export const User = db.define("user",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})