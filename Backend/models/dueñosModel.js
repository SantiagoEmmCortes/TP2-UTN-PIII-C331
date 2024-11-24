const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const dueñosModel = db.define("dueños", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "El nombre no puede estar vacío." } }
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "El apellido no puede estar vacío." } }
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El teléfono no puede estar vacío." },
            isNumeric: { msg: "El teléfono solo puede contener números." },
            len: { args: [7, 15], msg: "El teléfono debe tener entre 7 y 15 dígitos." }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El correo electrónico no puede estar vacío." },
            isEmail: { msg: "El correo electrónico debe tener un formato válido." }
        }
    }
})

module.exports = dueñosModel