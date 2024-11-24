const { mascotasModel, dueñosModel } = require("../models/relaciones.js")

const getMascotas = async (req, res) => {
    try {
        const mascotas = await mascotasModel.findAll({
            include: {
                model: dueñosModel,
                attributes: ["nombre", "apellido"]
            }
        });
        res.status(200).json({
            message: "Lista de mascotas obtenida correctamente.",
            data: mascotas
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la lista de mascotas.",
            error: error.message
        });
    }
}

const getMascotaPorId = async (req, res) => {
    try {
        const mascota = await mascotasModel.findByPk(req.params.id);
        if (!mascota) {
            return res.status(404).json({ message: "Mascota no encontrada." });
        }
        res.status(200).json({
            message: "Mascota encontrada.",
            data: mascota
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la mascota.",
            error: error.message
        });
    }
}

const crearMascota = async (req, res) => {
    try {
        const { dueñoId } = req.body;
        const dueño = await dueñosModel.findByPk(dueñoId);
        if (!dueño) {
            return res.status(404).json({ message: "El dueño asociado no existe." });
        }
        const nuevaMascota = await mascotasModel.create(req.body);
        res.status(201).json({
            message: "Mascota creada correctamente.",
            data: nuevaMascota
        });
    } catch (error) {
        res.status(400).json({
            message: "Error al crear la mascota.",
            error: error.message
        });
    }
}

const borrarMascota = async (req, res) => {
    try {
        const mascotaEliminada = await mascotasModel.destroy({
            where: { id: req.params.id }
        });
        if (!mascotaEliminada) {
            return res.status(404).json({ message: "Mascota no encontrada." });
        }
        res.status(200).json({ message: "Mascota borrada correctamente." });
    } catch (error) {
        res.status(500).json({
            message: "Error al borrar la mascota.",
            error: error.message
        });
    }
}

const actualizarMascota = async (req, res) => {
    try {
        const mascotaActualizad = await mascotasModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (!mascotaActualizad[0]) {
            return res.status(404).json({ message: "Mascota no encontrada." });
        }
        res.status(200).json({ message: "Mascota actualizada correctamente." });
    } catch (error) {
        res.status(400).json({
            message: "Error al actualizar la mascota.",
            error: error.message
        });
    }
}

module.exports = { getMascotas, getMascotaPorId, crearMascota, borrarMascota, actualizarMascota }