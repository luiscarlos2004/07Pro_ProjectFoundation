const {Schema,model} = require('mongoose');
let solicitud = Schema({
    nombre:String,
    edad:Number,
    raza:String,
    imagen:String,
    tamano:String,
    vacunas:String,
    fecha:{
        type:Date,
        default:new Date()
    },
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
    nombrep:String,
    edadp:Number,
    idanimal:String,
    idpersona:String,
    solicitudadopcion:{
        type:String,
        default:'PROCESO'
    }
})

module.exports = model('solicitude',solicitud);