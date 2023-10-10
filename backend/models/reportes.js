const mongoose = require('mongoose');

const ReporteSchema = new mongoose.Schema({

  titulo: String,

  descripcion: String,

  fechaCreacion: Date,

  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },

  estado: String,

});

const Reporte = mongoose.model('Reporte', ReporteSchema);

module.exports = { Reporte };