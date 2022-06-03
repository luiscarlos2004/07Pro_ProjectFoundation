const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');
const {postUsers} = require('../controllers/users');
const {validarCampos} = require('../middlewares/validar-campos');
const {correoExiste,passwordExiste} = require('../helpers/db-validatots');
router.post('/',[
    check('correo').custom(correoExiste),
    check('password').custom(passwordExiste),
    validarCampos
],postUsers);
// router.get('/',getActivo);



module.exports = router;