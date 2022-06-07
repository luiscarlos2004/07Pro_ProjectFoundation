const users = require('../models/users');
const registroUser = require('../models/registrosUser');
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
module.exports = {
    postUsers,
    consultarEstado,
    resgistrarUsuarios,
    cargarUsuarios
}