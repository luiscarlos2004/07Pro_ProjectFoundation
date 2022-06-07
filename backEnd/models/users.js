const {Schema,model} = require('mongoose');

const usuario = Schema({
    correo:{
        type:String,
        require:[true,'El correo obligatorio']
    },
    password:{
        type:String,
        require:[true,'La contraseña es obligatoria']
    },
    estado:{
        type:Boolean,
        default:false
    },
    rol:{
        type:String,
        default:'USER'
    }
})
module.exports = model('usuario',usuario);