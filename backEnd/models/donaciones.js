var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mod_donaciones = new Schema({
    nombre:String,
    cc:String,
    cuenta:String,
    valor:Number,
    cuotas:Number,
    banco:String,

});

module.exports = mongoose.model("Donaciones", mod_donaciones);