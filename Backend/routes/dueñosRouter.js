const express = require("express")

const { getDueños, getDueñoPorId, crearDueño, borrarDueño, actualizarDueño } = require("../controllers/dueñosControllers.js")

const router = express.Router()

router.get("/", getDueños)
router.get("/:id", getDueñoPorId)
router.post("/", crearDueño)
router.delete("/:id", borrarDueño)
router.put("/:id", actualizarDueño)

module.exports = router