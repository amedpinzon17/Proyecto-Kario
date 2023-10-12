const express = require('express');

require('dotenv').config();

const router = express.Router();
const {getIndicadores, postIndicadores, deleteIndicadores, putIndicadores} = require('../controller/indicadores.controllers.js')


router.get('/getIndicador',getIndicadores);
router.post('/postIndicador', postIndicadores);
router.delete('/deleteIndicador/:id', deleteIndicadores);
router.put('/putIndicador/:id', putIndicadores);



module.exports = router;