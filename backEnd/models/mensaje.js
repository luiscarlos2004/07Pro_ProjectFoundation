const {Schema,model} = require('mongoose');
let mensajes = Schema({
    idpersonaa:String,
    mensaje:String
})

module.exports = model('mensaje',mensajes);