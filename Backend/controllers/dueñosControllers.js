const { UPDATE } = require("sequelize/lib/query-types")
const dueñosModel = require("../models/dueñosModel.js")

const getDueños = async (req, res) => {
    try {
        const dueños = await dueñosModel.findAll()
        res.json(dueños)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const getDueñoPorId = async (req, res) => {
    try {
        const dueño = await dueñosModel.findByPk(req.params.id)
        res.json(dueño)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const crearDueño = async (req, res) => {
    try {
        await dueñosModel.create(req.body)
        res.json("Dueño agregado correctamente");
    } catch (error) {
        res.json({ message: error.message })
    }
}

const borrarDueño = async (req, res) => {
    try {
        await dueñosModel.destroy({
            where: { id: req.params.id }
        })
        res.json("Dueño Borrado Correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

const actualizarDueño = async (req, res) => {
    try {
        await dueñosModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json("Dueño Actualizado Correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { getDueños, getDueñoPorId, crearDueño, borrarDueño, actualizarDueño }