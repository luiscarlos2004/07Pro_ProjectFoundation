var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mod_contactos = new Schema({
    nombre:String,
    tel:String,
    correo:String,
    asunto:String,
    descripcion:String,

});

module.exports = mongoose.model("Contactos", mod_contactos);