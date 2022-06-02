const {Router} = require('express');
const router = Router();
const {getUsers,postUsers} = require('../controllers/users');
router.get('/',getUsers);
router.post('/',postUsers);



module.exports = router;