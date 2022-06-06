const users = require('../models/users');
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
module.exports = {
    postUsers,
    consultarEstado
}