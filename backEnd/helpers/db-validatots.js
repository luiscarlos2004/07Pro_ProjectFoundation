const users = require('../models/users');
// const registroUsers = require('../models/registrosUser');
const correoExiste = async(correo = '') =>{
    const correoExiste = await users.findOne({correo});
    if(!correoExiste){
        throw new Error(`El correo existe en la base de datos`);
       
    }
    // else if(correoExiste == correo){
    //     throw new Error('Este correo ya esta registrado');
    // }
}
const passwordExiste = async(password = '') =>{
    const passwordExiste = await users.findOne({password});
    if(!passwordExiste){
        throw new Error(`La contraseña no existe en la base de datos`,);
    }
}
// const cedulaExiste = async(cedula = '')=>{
//     const cedulaExiste = await registroUsers.findOne(cedula);
//     if(!cedulaExiste){
//         throw new Error('La cedula esta incompleta');
//     }
// }
// const edadExiste = async(edad = 0)=>{
//     const edadExiste = await registroUsers.findOne(edad);
//     if(!edadExiste && edadExiste > 18){
//         throw new Error('La edad no es valida o no registrate la edad');
//     }
// }
// const usuarioExiste = async(usuario = '')=>{
//     const usuarioExiste = await registroUsers.findOne(usuario);
//     if(!usuarioExiste){
//         throw new Error('El usuario no se encuentra registrado');
//     }
// }
// // const estadoActivo = async(estado = false)=>{
// //     const estadoActivo = await users.findOne(estado);
// //     if(estadoActivo == false){
// //         throw new Error(`El usuario no esta activo`);
// //     }
// // }
module.exports = {
    correoExiste,
    passwordExiste
    // cedulaExiste,
    // edadExiste,
    // usuarioExiste
    // estadoActivo
}