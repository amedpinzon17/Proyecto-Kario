const express = require('express');

require('dotenv').config();

const router = express.Router();

const {authRequired} = require('../middlewares/validateToken.js')



const { getAllReportes, getReportesById, createReporte, updateReporte, deleteReporte } = require ('../controller/reportes.controllers.js');

router.get("/getReporte", authRequired,getAllReportes);
router.get("/getReporte/:id", getReportesById);
router.post("/postReporte", createReporte);
router.put("/putReporte/:id", updateReporte);
router.delete("/deleteReporte/:id", deleteReporte);


module.exports = router;