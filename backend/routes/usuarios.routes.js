const express = require('express');

require('dotenv').config();

const router = express.Router();


const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require ('../controller/usuarios.controller.js');

router.get("/getUsuarios",getUsuarios);
router.post("/postReporte", postUsuarios);
router.put("/putReporte/:id", putUsuarios);
router.delete("/deleteReporte/:id", deleteUsuarios);


module.exports = router;