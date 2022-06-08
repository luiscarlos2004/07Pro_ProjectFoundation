const {Router} = require('express');
const router = Router();
const {getUsers,postUsers} = require('../controllers/users');
router.get('/',getUsers);
router.post('/',postUsers);

var Mascota = require('../models/mascota')

router.get('/get_Mascotas' , async function (req , res){
   var mascotas = await Mascota.find();
   console.log(mascotas)
   res.send(mascotas)


});


router.post('/crear_mascota' , async function (req, res){
   var datos_mascota = req.body
   
   //console.log(datos_mascota)
   var guardando_mascota = new Mascota(datos_mascota);
   await guardando_mascota.save();
   
   });
   

module.exports = router;