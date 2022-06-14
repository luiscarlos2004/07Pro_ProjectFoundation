const {Schema,model} = require('mongoose');
let archivoenviado = Schema({
    archivo:String
})

module.exports = model(archivoenviado);