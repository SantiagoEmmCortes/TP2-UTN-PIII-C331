const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const mascotasModel = db.define("mascotas", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "El nombre no puede estar vacío." } }
    },
    tipoMascota: {
        type: DataTypes.ENUM("Perro", "Gato", "Conejo", "Ave", "Otro"),
        allowNull: false,
        validate: {
            isIn: {
                args: [["Perro", "Gato", "Conejo", "Ave", "Otro"]],
                msg: "El tipo de mascota debe ser uno de los siguientes: Perro, Gato, Conejo, Ave, Otro."
            }
        }
    },
    estado: {
        type: DataTypes.ENUM("Active", "Inactive"),
        allowNull: false,
        validate: {
            isIn: {
                args: [["Active", "Inactive"]],
                msg: "El estado debe ser 'Active' o 'Inactive'."
            }
        }
    },
    nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: { msg: "La fecha de nacimiento debe ser válida." }
        }
    },
    dueñoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "dueños", key: "id" }
    }
})

module.exports = mascotasModel