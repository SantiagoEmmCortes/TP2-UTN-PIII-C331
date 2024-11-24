const express = require("express")

const { getMascotas, getMascotaPorId, crearMascota, borrarMascota, actualizarMascota } = require("../controllers/mascotasControllers.js")

const router = express.Router()

router.get("/", getMascotas)
router.get("/:id", getMascotaPorId)
router.post("/", crearMascota)
router.delete("/:id", borrarMascota)
router.put("/:id", actualizarMascota)

module.exports = router