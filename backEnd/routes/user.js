const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');
const {postUsers,consultarEstado,resgistrarUsuarios,cargarUsuarios} = require('../controllers/users');
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
router.get('/',cargarUsuarios)

module.exports = router;