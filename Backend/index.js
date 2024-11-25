const express = require("express")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const dueñosRouter = require("./routes/dueñosRouter.js")
const mascotasRouter = require("./routes/mascotasRouter.js")
const db = require("./models/relaciones.js")

const app = express()
const port = 3030

app.use(cors())
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/duenos", dueñosRouter)
app.use("/mascotas", mascotasRouter)

const conexionDB = async () => {
    try {
        await db.authenticate()
        console.log("conexion ok a la base de datos");
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
    }
}

app.listen(port, () => {
    conexionDB()
    console.log(`Servidor ok en el puerto ${port}`);
    console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
})