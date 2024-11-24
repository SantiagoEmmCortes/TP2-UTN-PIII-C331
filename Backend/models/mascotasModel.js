const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const mascotasModel = db.define("mascotas", {
    nombre: { type: DataTypes.STRING },
    tipoMascota: {
        type: DataTypes.ENUM("Perro", "Gato", "Conejo", "Ave", "Otro")
    },
    estado: {
        type: DataTypes.ENUM("Active", "Inactive")
    },
    nacimiento: { type: DataTypes.DATE },
    dueñoId: {
        type: DataTypes.INTEGER,
        references: { model: "dueños", key: "id" }
    }
})

module.exports = mascotasModel