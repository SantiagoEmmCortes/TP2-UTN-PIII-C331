const { UPDATE } = require("sequelize/lib/query-types")
const mascotasModel = require("../models/mascotasModel.js")

const getMascotas = async (req, res) => {
    try {
        const mascotas = await mascotasModel.findAll()
        res.json(mascotas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const getMascotaPorId = async (req, res) => {
    try {
        const mascota = await mascotasModel.findByPk(req.params.id)
        res.json(mascota)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const crearMascota = async (req, res) => {
    try {
        await mascotasModel.create(req.body)
        res.json("Mascota agregada correctamente");
    } catch (error) {
        res.json({ message: error.message })
    }
}

const borrarMascota = async (req, res) => {
    try {
        await mascotasModel.destroy({
            where: { id: req.params.id }
        })
        res.json("Mascota Borrada Correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

const actualizarMascota = async (req, res) => {
    try {
        await mascotasModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json("Mascota Actualizada Correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { getMascotas, getMascotaPorId, crearMascota, borrarMascota, actualizarMascota }