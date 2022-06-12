var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mod_experiencias = new Schema({
    nombre:String,
    mascota:String,
    foto:String,
    comentario:String,
});

module.exports = mongoose.model("Experincias", mod_experiencias);