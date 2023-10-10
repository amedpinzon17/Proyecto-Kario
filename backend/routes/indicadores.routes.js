const express = require('express');

require('dotenv').config();

const router = express.Router();
const {authRequired} = require('../middlewares/validateToken.js')
const {getIndicadores, postIndicadores, deleteIndicadores, putIndicadores} = require('../controller/indicadores.controllers.js')


router.get('/getIndicador', authRequired,getIndicadores);
router.post('/postIndicador', postIndicadores);
router.delete('/deleteIndicador/:id', deleteIndicadores);
router.put('/putIndicador/:id', putIndicadores);



module.exports = router;