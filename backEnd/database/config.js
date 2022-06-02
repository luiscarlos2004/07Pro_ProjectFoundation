const mongoose = require('mongoose');

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.PASSBASE, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Base de datos conectada online');
    }catch(error){
        throw new Error('Error al inicializar la base de datos');
    }
}
module.exports = {
    dbConnection
};