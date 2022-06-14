const path = require('path');
const {response} = require('express');
const cargarArchivos = (req,res = response) => {
    console.log(req.files)

    if(!req.files || Object.keys(req.files).length === 0 || !req.files.archivos){
        return res.status(400).json({msg:"No hay archivos en la peticion"});
    }
    const {archivo} = req.files;
    const uploadsPath = path.join(__dirname, '../uploads/',archivo.name);
    archivo.mv(uploadsPath,(err)=>{
        if(err){
            return res.status(500).json({err});
        }
        res.sendFile(uploadsPath)
    })
}
module.exports = {
    cargarArchivos
}