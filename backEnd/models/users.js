const {Schema,model} = require('mongoose');

const usuario = Schema({
    correo:{
        type:String,
        require:[true,'El nombre obligatorio']
    },
    password:{
        type:String,
        require:[true,'La contraseña es obligatoria']
    },
    login:Boolean
})
module.exports = model('usuario',usuario);