const users = require('../models/users');
const registroUser = require('../models/registrosUser');
const animals = require('../models/registrarAnimales');
const postUsers = async(req,res)=>{
    let {correo,password} = req.body;
    let resp = await users.findOne({$and:[{correo},{password}]});
    await users.updateOne({_id:resp.id},{estado:true})
    if(resp){
        res.send(resp);
    }else{
        res.send(false);
    }
}
const consultarEstado = async(req,res)=>{
    const {estado} = await users.findById(req.params.id);
    if(estado){
        res.send(true)
    }else{
        res.send(false)
    }
}
const resgistrarUsuarios = async(req,res)=>{
    const {correo,password,estado,rol, ...resto} = req.body;
    let obj = {
        correo,
        password,
        estado,
        rol
    }
    await new registroUser(resto).save();
    let {_id} = await registroUser.findOne(resto);
    let iduser = _id;
    let obj2 = {
        ...obj,
        iduser
    }
    await new users(obj2).save();
    res.send(true)
}
const cargarUsuarios = async(req,res)=>{
    let doc = await users.find();
    res.send(doc);
}

const cargarUsuariosdos = async(req,res)=>{
    let numeros = req.params.numero;
    const desde = numeros;
    let hasta = 5;
    const usuarios = await users.find().skip(Number(desde)).limit(Number(hasta));
    console.log(usuarios)
    res.send(usuarios)
}
const ingresarAnimal = async(req,res)=>{
    let doc = req.body;
    await new animals(doc).save();
    let {_id,fecha,__v, ...resto} = await animals.find();
    res.send(resto);
}

const mostrarAnimales = async(req,res)=>{
    let numero = req.params.numero;
    const desde = numero;
    const hasta = 5;
    let info =  await animals.find().skip(Number(desde)).limit(Number(hasta));
    res.send(info)
}
const eliminaranimal = async(req,res)=>{
    let ids = req.params.id;
    await animals.findByIdAndDelete(ids);
    res.send('eliminado');
}
const editaranimal = async(req,res)=>{
    const id = req.params.id;
    const datos = req.body
    // console.log(datos)
    await animals.updateOne({_id:id},datos)
    res.send('actualizado')
}
const sacaranimalfront = async(req,res)=>{
    let result = await animals.find();
    res.send(result);
}
const solicitudes = async(req,res)=>{
    console.log(req.body)
    res.send('datos guardados')
}
module.exports = {
    postUsers,
    consultarEstado,
    resgistrarUsuarios,
    cargarUsuarios,
    cargarUsuariosdos,
    ingresarAnimal,
    mostrarAnimales,
    eliminaranimal,
    editaranimal,
    sacaranimalfront,
    solicitudes
}