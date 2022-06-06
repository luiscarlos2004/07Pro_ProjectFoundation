const users = require('../models/users');

const correoExiste = async(correo = '') =>{
    const correoExiste = await users.findOne({correo});
    if(!correoExiste){
        throw new Error(`El correo no existe en la base de datos`);
       
    }
}
const passwordExiste = async(password = '') =>{
    const passwordExiste = await users.findOne({password});
    if(!passwordExiste){
        throw new Error(`La contraseña no existe en la base de datos`,);
    }
}
// const estadoActivo = async(estado = false)=>{
//     const estadoActivo = await users.findOne(estado);
//     if(estadoActivo == false){
//         throw new Error(`El usuario no esta activo`);
//     }
// }
module.exports = {
    correoExiste,
    passwordExiste
    // estadoActivo
}