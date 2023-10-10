
const { Router} = require('express');
const { login, register, logout, profil} = require('../controller/auth.controller.js');
const { authRequired} = require('../middlewares/validateToken.js')



const router = Router();

router.post('/register', register);
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', authRequired ,profil)

module.exports = router