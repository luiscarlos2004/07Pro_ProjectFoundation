const {Schema,model} = require('mongoose');

const registrarAnimales = Schema({
    nombre:String,
    edad:Number,
    raza:String,
    imagen:String,
    tamano:String,
    vacunas:String,
    fecha:{
        type:Date,
        default:new Date()
    }
})

module.exports = model('animal',registrarAnimales);