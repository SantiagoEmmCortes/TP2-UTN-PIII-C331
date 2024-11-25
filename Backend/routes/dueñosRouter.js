const express = require("express")

const { getDueños, getDueñoPorId, crearDueño, borrarDueño, actualizarDueño } = require("../controllers/dueñosControllers.js")

const router = express.Router()

/**
 * @swagger
 * /duenos:
 *   get:
 *     summary: Obtiene una lista de todos los dueños
 *     description: Permite paginar y ordenar los registros de dueños.
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
 *     responses:
 *       200:
 *         description: Lista de dueños obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 total:
 *                   type: integer
 *                   description: Número total de registros de dueños.
 *                 page:
 *                   type: integer
 *                   description: Página actual de los resultados.
 *                 totalPages:
 *                   type: integer
 *                   description: Número total de páginas disponibles.
 *                 data:
 *                   type: array
 *                   description: Lista de dueños en la página actual.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID del dueño.
 *                       nombre:
 *                         type: string
 *                         description: Nombre del dueño.
 *                       apellido:
 *                         type: string
 *                         description: Apellido del dueño.
 *                       telefono:
 *                         type: string
 *                         description: Teléfono del dueño.
 *                       email:
 *                         type: string
 *                         description: Email del dueño.
 *       400:
 *         description: Error en los parámetros de consulta.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/", getDueños)

/**
 * @swagger
 * /duenos/{id}:
 *   get:
 *     summary: Obtiene un dueño por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del dueño
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información del dueño
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 telefono:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Dueño no encontrado
 */
router.get("/:id", getDueñoPorId)

/**
 * @swagger
 * /duenos:
 *   post:
 *     summary: Crea un nuevo dueño
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Santiago
 *               apellido:
 *                 type: string
 *                 example: Cortes
 *               telefono:
 *                 type: string
 *                 example: "123456789"
 *               email:
 *                 type: string
 *                 example: santiago.cortes@example.com
 *     responses:
 *       201:
 *         description: Dueño creado correctamente
 *       400:
 *         description: Error de validación
 */
router.post("/", crearDueño)

/**
 * @swagger
 * /duenos/{id}:
 *   delete:
 *     summary: Elimina un dueño por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del dueño
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dueño eliminado correctamente
 *       404:
 *         description: Dueño no encontrado
 */
router.delete("/:id", borrarDueño)

/**
 * @swagger
 * /duenos/{id}:
 *   put:
 *     summary: Actualiza un dueño por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del dueño
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
 *                 example: Santiago
 *               apellido:
 *                 type: string
 *                 example: Cortes
 *               telefono:
 *                 type: string
 *                 example: "123456789"
 *               email:
 *                 type: string
 *                 example: santiago.cortes@example.com
 *     responses:
 *       200:
 *         description: Dueño actualizado correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Dueño no encontrado
 */
router.put("/:id", actualizarDueño)

module.exports = router