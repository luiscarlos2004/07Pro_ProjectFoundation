const users = require('../models/users');
const registroUser = require('../models/registrosUser');
const animals = require('../models/registrarAnimales');
const solicitudesmo = require('../models/solicitudadopcion');
const mensajes = require('../models/mensaje');
const postUsers = async(req,res)=>{
    let {correo,password} = req.body;
    let resp = await users.findOne({$and:[{correo},{password}]});
    
    if(resp){
        await users.updateOne({_id:resp._id},{estado:true})
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
    const usuarios = await registroUser.find().skip(Number(desde)).limit(Number(hasta));
    // console.log(usuarios)
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
    res.send(true);
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
    let idanimal = req.body.ida;
    let idpersona = req.body.idu;
    let {nombre,edad,raza,imagen,tamano,vacunas} = await animals.findById(idanimal);
    let {iduser} = await users.findById(idpersona)
    let {nombre:nombrep,cedula,celular,direccion,ocupacion,ingresos,edad:edadp,sexo} = await registroUser.findById(iduser);
    let infosolicitud = {
        nombre,edad,raza,imagen,tamano,vacunas,
        nombrep,cedula,celular,direccion,ocupacion,ingresos,edadp,sexo,idanimal,idpersona
    }
    // console.log(infoAnimal)
    // console.log(infopersona)
    // let solici = await solicitudesmo.find({cedula});
    // console.log(cedula,cedula)
    // if(cedula == cedula){
        // res.send(false)
    // }else{
    await solicitudesmo(infosolicitud).save();
    res.send(true)
    // }
    
    
}
const consultarsolicitudes = async (req,res)=>{
    let infosolicirudes = await solicitudesmo.find({solicitudadopcion:"PROCESO"});
    res.send(infosolicirudes)
}
const solicitudaceptada = async(req,res)=>{
    let ide = req.params.id
    const {idanimal,nombre} = await solicitudesmo.findById(ide)
    let nom = nombre
    await animals.findByIdAndRemove(idanimal);
    // await solicitudesmo.find(nombre).remove();
    // let otras = await solicitudesmo.find({idanimal:idanimal});
    await solicitudesmo.updateMany({idanimal:idanimal},{solicitudadopcion:"DENEGADAS"})
    await solicitudesmo.findByIdAndUpdate({_id:ide},{solicitudadopcion:"ACEPTADA"});
    res.send(true)
}
const buscaranimall = async(req,res)=>{
    let busca = req.body.busqueda;
    if(busca.length > 0){
        let encontrado = await animals.find({nombre:{$in:[new RegExp(`${busca}`,'i')]}})
        console.log(encontrado);
        res.send(encontrado)
    }else{
        let animales = await animals.find();
        res.send(animales)
    }
    
}
const negarsolicitud = async(req,res)=>{
    let idsolicitud = req.params.iddene;
    // console.log(idpersonaa)
    await solicitudesmo.findByIdAndUpdate({_id:idsolicitud},{solicitudadopcion:"DENEGADAS"});
    res.send(true)
}
const buscarsolicitudes = async(req,res)=>{
    let ids = req.params.idbuscasol
    let soli = await solicitudesmo.find({idpersona:ids})
    res.send(soli)
}
const eliminarUsers = async(req,res)=>{
    let idu = req.params.idue;
    console.log(idu)
    await registroUser.findByIdAndRemove(idu)
    await users.updateOne({iduser:idu},{estado:false})
    res.send(true)
}
const editarol = async(req,res)=>{
    const {_id,rol} = req.body
    // console.log(_id,rol)
    if(rol == 'user'){
        await users.updateOne({iduser:_id},{rol:'USER'})
        res.send(true)
    }else if(rol == 'admin'){
        await users.updateOne({iduser:_id},{rol:'ADMIN'})
        res.send(true)
    }
    // res.send(true)
    
    // console.log(req.params.idp)
}
const buscarUsers = async(req,res)=>{
    let busca = req.body.busqueda;
    // console.log(req.body)
    if(busca.length > 0){
        let encontrado = await registroUser.find({nombre:{$in:[new RegExp(`${busca}`,'i')]}})
        console.log(encontrado);
        res.send(encontrado)
    }else{
        let animales = await registroUser.find();
        res.send(animales)
    }
}
const actualizarUser = async(req,res)=>{
    let {_id,...info} = req.body;
    // console.log(ids)
    let datos = await registroUser.findById({_id:_id});
    console.log(datos)
    res.send(true)
}
const mostrarinfouser = async(req,res)=>{
    let id = req.params.ids
    await registroUser.findById({_id:id})
    res.send(true)
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
    solicitudes,
    consultarsolicitudes,
    solicitudaceptada,
    buscaranimall,
    negarsolicitud,
    buscarsolicitudes,
    eliminarUsers,
    editarol,
    buscarUsers,
    actualizarUser,
    mostrarinfouser
}