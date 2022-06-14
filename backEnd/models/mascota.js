const mongoose = require ("mongoose");
var Schema = mongoose.Schema;


var mascota_modelo = new Schema ({
  nombre: String,
  raza: String,
  tamano: String,
  historial: String,
  edad: String


});


module.exports = mongoose.model('Mascota' , mascota_modelo)