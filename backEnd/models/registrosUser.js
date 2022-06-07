const {Schema,model} = require('mongoose');
const registrosUser = Schema({
    nombre:{
        type:String,
        require:[true, 'El nombre es obligatorio']
    },
    cedula:{
        type:Number,
        require:[true,'La cedula es obligatoria']
    },
    celular:{
        type:Number,
        require:[true,'El celular es obligatorio']
    },
    direccion:String,
    ocupacion:String,
    ingresos:Number,
    edad:{
        type:Number,
        require:[true,'La edad es obligatoria']
    },
    preferencias:String,
    sexo:String,
    imagenperfil:String,
    pasatiempo:String,
    fecha:{
        type:Date,
        default:new Date()
    }
})

module.exports = model('registrosUser',registrosUser)