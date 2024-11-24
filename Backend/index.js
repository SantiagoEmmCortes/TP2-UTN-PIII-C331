const express = require("express")
const app = express()
const cors = require("cors")
const dueñosRouter = require("./routes/dueñosRouter.js")
const mascotasRouter = require("./routes/mascotasRouter.js")
const db = require("./data/db.js")

app.use(cors())
app.use(express.json()) 

const port = 3030

// app.get("/", (req, res) => {
//     res.send("Pagina Principal")
// })

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
})