const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const dueñosModel = db.define("dueños", {
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING }
})

module.exports = dueñosModel