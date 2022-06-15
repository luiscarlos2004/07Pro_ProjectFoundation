const {Schema,model} = require('mongoose');

const Modelo_Daradopcion = Schema({
    nombre: String,
    email:String,
    telefono:String,
    mascota:String,
    raza: String,
    imagen: String,
    edad: String,
    motivo: String,
})

module.exports = model('darAdopcion',Modelo_Daradopcion);


