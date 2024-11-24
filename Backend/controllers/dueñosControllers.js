const { dueñosModel, mascotasModel } = require("../models/relaciones.js")

const getDueños = async (req, res) => {
    try {
        const { page = 1, limit = 5, sort = 'ASC' } = req.query;  // Valores predeterminados
        const offset = (page - 1) * limit;

        if (sort !== 'ASC' && sort !== 'DESC') {
            return res.status(400).json({
                message: "El parámetro 'sort' debe ser 'ASC' o 'DESC'."
            });
        }

        const dueños = await dueñosModel.findAndCountAll({
            limit: parseInt(limit),
            offset: offset,
            order: [
                ['createdAt', sort]
            ]
        });

        res.status(200).json({
            message: "Lista de dueños obtenida correctamente.",
            total: dueños.count,
            page: parseInt(page),
            totalPages: Math.ceil(dueños.count / limit),
            data: dueños.rows,
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los dueños.",
            error: error.message,
        });
    }
}

const getDueñoPorId = async (req, res) => {
    try {
        const dueño = await dueñosModel.findByPk(req.params.id);
        if (!dueño) {
            return res.status(404).json({ message: "Dueño no encontrado." });
        }
        res.status(200).json({
            message: "Dueño encontrado.",
            data: dueño
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el dueño.",
            error: error.message
        });
    }
}

const crearDueño = async (req, res) => {
    try {
        const nuevoDueño = await dueñosModel.create(req.body);
        res.status(201).json({
            message: "Dueño creado correctamente.",
            data: nuevoDueño
        });
    } catch (error) {
        res.status(400).json({
            message: "Error al crear el dueño.",
            error: error.message
        });
    }
}

const borrarDueño = async (req, res) => {
    try {
        const tieneMascotas = await mascotasModel.findOne({ where: { dueñoId: req.params.id } });
        if (tieneMascotas) {
            return res.status(400).json({
                message: "No se puede borrar el dueño porque tiene mascotas asociadas.",
            });
        }
        const dueñoEliminado = await dueñosModel.destroy({
            where: { id: req.params.id }
        });
        if (!dueñoEliminado) {
            return res.status(404).json({ message: "Dueño no encontrado." });
        }
        res.status(200).json({ message: "Dueño borrado correctamente." });
    } catch (error) {
        res.status(500).json({
            message: "Error al borrar el dueño.",
            error: error.message
        });
    }
}

const actualizarDueño = async (req, res) => {
    try {
        const dueñoActualizado = await dueñosModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (!dueñoActualizado[0]) {
            return res.status(404).json({ message: "Dueño no encontrado." });
        }
        res.status(200).json({ message: "Dueño actualizado correctamente." });
    } catch (error) {
        res.status(400).json({
            message: "Error al actualizar el dueño.",
            error: error.message
        });
    }
};

module.exports = { getDueños, getDueñoPorId, crearDueño, borrarDueño, actualizarDueño }