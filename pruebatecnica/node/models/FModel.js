//importamos la conexion a la db
import db from "../database/db.js";
import {  DataTypes } from "sequelize";

const FModel = db.define('fiscaliases',{
    nombre:{type: DataTypes.STRING},
    direccion:{type: DataTypes.STRING},
    telefono:{type: DataTypes.STRING} 
}, {
    timestamps: false   
})

export default FModel