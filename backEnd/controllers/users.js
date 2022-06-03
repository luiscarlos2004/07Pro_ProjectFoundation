const users = require('../models/users');
const postUsers = async(req,res)=>{
    let {correo,password} = req.body;
    let resp = await users.findOne({$and:[{correo},{password}]});
    if(resp){
        res.send(resp._id);
    }else{
        res.send(false);
    }
    
}
// const getActivo = async(req,res)=>{
//     // let {login} = await users.findOne
// }


module.exports = {
    postUsers,
    // getActivo
}