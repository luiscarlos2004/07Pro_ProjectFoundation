const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');
const {postUsers,consultarEstado,resgistrarUsuarios,cargarUsuarios} = require('../controllers/users');
const {validarCampos} = require('../middlewares/validar-campos');
const {correoExiste,passwordExiste,cedulaExiste,edadExiste,usuarioExiste} = require('../helpers/db-validatots');
router.post('/',[
    check('correo').custom(correoExiste),
    check('password').custom(passwordExiste),
    validarCampos
],postUsers);
router.get('/:id',consultarEstado);
router.post('/register', [
    check('correo').custom(correoExiste),
    check('password').custom(passwordExiste),
    // check('cedula').custom(cedulaExiste),
    // check('edad').custom(edadExiste),
    // check('usuario').custom(usuarioExiste),
    validarCampos
],resgistrarUsuarios);
router.get('/',cargarUsuarios)
module.exports = router;