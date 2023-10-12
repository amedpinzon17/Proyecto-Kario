const express = require('express');

require('dotenv').config();

const router = express.Router();


const { getAllReportes, getReportesById, createReporte, updateReporte, deleteReporte } = require ('../controller/reportes.controllers.js');

router.get("/getReporte",getAllReportes);
router.get("/getReporte/:id", getReportesById);
router.post("/postReporte", createReporte);
router.put("/putReporte/:id", updateReporte);
router.delete("/deleteReporte/:id", deleteReporte);


module.exports = router;