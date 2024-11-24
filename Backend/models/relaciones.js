const db = require("../data/db.js");
const dueñosModel = require("./dueñosModel.js");
const mascotasModel = require("./mascotasModel.js");

dueñosModel.hasMany(mascotasModel, {
    foreignKey: "dueñoId",
    onDelete: "CASCADE"
})

mascotasModel.belongsTo(dueñosModel, {
    foreignKey: "dueñoId"
})

module.exports = {
    db,
    dueñosModel,
    mascotasModel
}
