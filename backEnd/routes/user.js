const {Router} = require('express');
const router = Router();
const {getUsers,postUsers} = require('../controllers/users');
router.get('/',getUsers);
router.post('/',postUsers);

var Mascota = require('../models/mascota')

router.get('/get_Mascotas' , async function (req , res){
   var mascotas = await Mascota.find();
   res.send(mascotas)


});


router.post('/crear_mascota' , async function (req, res){
   var datos_mascota = req.body
   
   //console.log(datos_mascota)
   var guardando_mascota = new Mascota(datos_mascota);
   await guardando_mascota.save();
   console.log(datos_mascota)
   
   });
   

module.exports = router;

const datosDonaciones = require('../models/donaciones');
const datosContactos = require('../models/contactos');
const datosExperincias = require('../models/experiencias');

router.post('/crear_donacion', async function(req, res){
    var donacion = req.body;
    var datos_donaciones = new datosDonaciones(donacion);
    await datos_donaciones.save();
    res.send({respuesta: "Donacion realizada"});
 
    console.log(datos_donaciones);
 })


 router.post('/crear_contacto', async function(req, res){
    var contacto = req.body;
    var datos_contactos = new datosContactos(contacto);
    await datos_contactos.save();
    res.send({respuesta: "Contacto agregado"});
 
    console.log(datos_contactos);
 })

 router.post('/crear_experiencia', async function(req, res){
   var experiencia = req.body;
   var datos_experiencia = new datosExperincias(experiencia);
   await datos_experiencia.save();
   res.send({respuesta: "Experiencia agregada"});

   console.log(datos_experiencia);
})

//Para ver la informacion
router.get("/get_contacto", async function (req, res) {
   var docs = await datosContactos.find();
   console.log(docs);
   res.send(docs);
 });

router.get("/get_donaciones", async function (req, res) {
   var docs = await datosDonaciones.find();
   console.log(docs);
   res.send(docs);
 });

router.get("/get_experiencia", async function (req, res) {
   var docs = await datosExperincias.find();
   console.log(docs);
   res.send(docs);
 });



