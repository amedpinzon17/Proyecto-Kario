const mongoose = require('mongoose');

const indicadorSchema = mongoose.Schema({
  
    indicador: {
        type: String,
     
    },

    descripcion: {
        type: String,
     
    },

    categoria: {
        type: String,
    
    }, 

    fechaInicio: {
        type: Date,
     
    },

    fechaFinal: {
        type: Date,
     
    },

    metodologia: {
        type: String,
     
    },


    frecuencia: {
        type: String,
     
    },

    cumplimiento: {
        type: String,
     
    },

    area: {
        type: String,
     
    },
});


const Indicadores = mongoose.model('Indicador', indicadorSchema, "indicadores");

module.exports = Indicadores;