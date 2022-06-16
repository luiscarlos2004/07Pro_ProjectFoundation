const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');
const {postUsers,consultarEstado,resgistrarUsuarios,cargarUsuarios,cargarUsuariosdos,ingresarAnimal,mostrarAnimales,eliminaranimal,editaranimal,sacaranimalfront,solicitudes,consultarsolicitudes,solicitudaceptada,buscaranimall,negarsolicitud,buscarsolicitudes,eliminarUsers,editarol,buscarUsers,actualizarUser,mostrarinfouser} = require('../controllers/users');
// const {cargarArchivos} = require('../controllers/uploads');
const datosExperincias = require('../models/experiencias');
const {validarCampos} = require('../middlewares/validar-campos');
const {correoExiste,passwordExiste} = require('../helpers/db-validatots');

router.post('/',[
    check('correo').not().isEmpty(),
    check('password').custom(passwordExiste),
    validarCampos
],postUsers);
router.get('/:id',consultarEstado);
router.post('/register', [
    check('correo','El correo esta vacio').custom(correoExiste).not().isEmpty(),
    check('password','La contrasena no existe').not().isEmpty(),
    validarCampos
],resgistrarUsuarios);
router.get('/',cargarUsuarios);
router.get('/paginador/:numero',cargarUsuariosdos);
router.post('/registraranimal',ingresarAnimal);
// router.get('/animalesmos',sacarAnimales);
// router.get('/mostrarani', mostrarani);
router.get('/consultar/animales/:numero',mostrarAnimales);
router.delete('/eliminaranimal/:id',eliminaranimal);
router.put('/editar/editaranimal/:id',editaranimal);
router.get('/sacaranimal/animales', sacaranimalfront);
router.post('/colocando/solicitudes',solicitudes);
router.get('/solicitud/solicitudesanimales',consultarsolicitudes);
router.get('/solicituda/solicitudanimal/:id',solicitudaceptada);
router.post('/buscan/buscaranimal',buscaranimall);
router.get('/solicitude/denegarsolicitud/:iddene',negarsolicitud);
router.get('/solicitudes/seguimientosoli/:idbuscasol',buscarsolicitudes);
// router.post('/cargar/cargararchivos',cargarArchivos);
router.delete('/users/eliminaruser/:idue',eliminarUsers );
router.put('/users/editarol',editarol);
router.post('/users/buscaruser',buscarUsers);
router.put('/userspage/actualizar/:idusers',actualizarUser);
router.get('/userspage/traerinfoactu/:ids', mostrarinfouser);
router.get("/experiencias/get_experiencia", async function (req, res) {
    var docs = await datosExperincias.find();
    console.log(docs);
    res.send(docs);
  });
 router.post('/experiencias/crear_experiencia', async function(req, res){
    var experiencia = req.body;
    var datos_experiencia = new datosExperincias(experiencia);
    await datos_experiencia.save();
    res.send({respuesta: "Experiencia agregada"});
 
    console.log(datos_experiencia);
 })
module.exports = router;