const express = require("express")
const { getMascotas, getMascotaPorId, crearMascota, borrarMascota, actualizarMascota } = require("../controllers/mascotasControllers.js")

const router = express.Router()

/**
 * @swagger
 * /mascotas:
 *   get:
 *     summary: Obtiene una lista de todas las mascotas
 *     description: Permite paginar, ordenar y filtrar las mascotas según su tipo y estado.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Número de la página para la paginación (por defecto, 1).
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Cantidad de registros por página para la paginación (por defecto, 5).
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: Ordenar los resultados por fecha de creación, ya sea de forma ascendente (ASC) o descendente (DESC).
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filtrar las mascotas por tipo (Perro, Gato, Conejo, Ave, Otro).
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, inactive]
 *         description: Filtrar las mascotas por estado (active, inactive).
 *     responses:
 *       200:
 *         description: Lista de mascotas obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   description: Número total de mascotas disponibles.
 *                 rows:
 *                   type: array
 *                   description: Lista de mascotas en la página actual.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID de la mascota.
 *                       nombre:
 *                         type: string
 *                         description: Nombre de la mascota.
 *                       tipoMascota:
 *                         type: string
 *                         description: Tipo de mascota (Perro, Gato, etc.).
 *                       estado:
 *                         type: string
 *                         description: Estado de la mascota (Active, Inactive).
 *                       dueño:
 *                         type: object
 *                         description: Información del dueño asociado a la mascota.
 *                         properties:
 *                           nombre:
 *                             type: string
 *                             description: Nombre del dueño.
 *                           apellido:
 *                             type: string
 *                             description: Apellido del dueño.
 *       400:
 *         description: Error en los parámetros de consulta.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/", getMascotas)

/**
 * @swagger
 * /mascotas/{id}:
 *   get:
 *     summary: Obtiene una mascota por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de la mascota
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 tipoMascota:
 *                   type: string
 *                 estado:
 *                   type: string
 *       404:
 *         description: Mascota no encontrada
 */
router.get("/:id", getMascotaPorId)

/**
 * @swagger
 * /mascotas:
 *   post:
 *     summary: Crea una nueva mascota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Igor
 *               tipoMascota:
 *                 type: string
 *                 enum: [Perro, Gato, Conejo, Ave, Otro]
 *                 example: Gato
 *               estado:
 *                 type: string
 *                 enum: [Active, Inactive]
 *                 example: Active
 *               nacimiento:
 *                 type: string
 *                 format: date
 *                 example: 2019-01-02
 *               dueñoId:
 *                 type: integer
 *                 description: ID del dueño al que pertenece la mascota
 *                 example: 1
 *     responses:
 *       201:
 *         description: Mascota creada correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Dueño asociado no encontrado
 */
router.post("/", crearMascota)

/**
 * @swagger
 * /mascotas/{id}:
 *   delete:
 *     summary: Elimina una mascota por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mascota eliminada correctamente
 *       404:
 *         description: Mascota no encontrada
 */
router.delete("/:id", borrarMascota)

/**
 * @swagger
 * /mascotas/{id}:
 *   put:
 *     summary: Actualiza una mascota por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Vin
 *               tipoMascota:
 *                 type: string
 *                 enum: [Perro, Gato, Conejo, Ave, Otro]
 *                 example: Gato
 *               estado:
 *                 type: string
 *                 enum: [Active, Inactive]
 *                 example: Inactive
 *               nacimiento:
 *                 type: string
 *                 format: date
 *                 example: 2021-09-22
 *               dueñoId:
 *                 type: integer
 *                 description: ID del dueño al que pertenece la mascota
 *                 example: 1
 *     responses:
 *       200:
 *         description: Mascota actualizada correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Mascota no encontrada
 */
router.put("/:id", actualizarMascota)

module.exports = router