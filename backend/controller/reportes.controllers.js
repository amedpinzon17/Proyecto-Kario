const { ObjectId } = require('mongoose').Types;
const { Reporte } = require('../models/reportes.js');

async function getAllReportes(req, res) {
  try {
    const Reportes = await Reporte.aggregate([
      {
        $lookup: {
          from: 'usuarios',
          localField: 'idUsuario',
          foreignField: '_id',
          as: 'idUsuario',
        },
      },
      {
        $project: {
          _id: 1,
          titulo: 1,
          descripcion: 1,
          fechaCreacion: 1,
          estado: 1,
          'idUsuario._id': 1,
          'idUsuario.nombre': 1,
          'idUsuario.apellido': 1,
          'idUsuario.correo': 1,
          'idUsuario.cargo': 1,
        },
      },
    ]);
    res.json(Reportes);
  } catch (error) {
    console.error('Error al listar Reportes', error);
    res.status(500).json({ mensaje: 'Error al listar Reportes' });
  }
}


async function getReportesById(req, res) {
  try {
    const reporte = await Reporte.aggregate([
      {
        $match: { _id: new ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: 'usuarios',
          localField: 'idUsuario',
          foreignField: '_id',
          as: 'idUsuario',
        },
      },
      {
        $project: {
          _id: 1,
          titulo: 1,
          descripcion: 1,
          fechaCreacion: 1,
          estado: 1,
          'idUsuario._id': 1,
          'idUsuario.nombre': 1,
          'idUsuario.apellido': 1,
          'idUsuario.correo': 1,
          'idUsuario.cargo': 1,
        },
      },
    ]);
    res.json(reporte);
  } catch (error) {
    console.error('Error al obtener Reporte por ID', error);
    res.status(500).json({ mensaje: 'Error al obtener Reporte por ID' });
  }
}

async function createReporte(req, res) {
  const { titulo, descripcion, fechaCreacion, idUsuario, estado } = req.body;

  if (!ObjectId.isValid(idUsuario)) {
    res.status(400).json({ message: 'ID de Usuario no es válida' });
    return;
  }

  const fechaCreation = new Date(fechaCreacion);

  const reporte = new Reporte({
    titulo,
    descripcion,
    fechaCreacion: fechaCreation,
    idUsuario: new ObjectId(idUsuario),
    estado,
  });

  try {
    const result = await reporte.save(); 
    res.status(201).json({ result, message: 'Reporte creado correctamente' });
  } catch (error) {
    console.error('Error al Crear el Reporte:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}



async function updateReporte(req, res) {
  const { id } = req.params;
  const { titulo, descripcion, fechaCreacion, idUsuario, estado } = req.body;

  if (!ObjectId.isValid(idUsuario)) {
    res.status(400).json({ message: 'ID de Usuario no es válida' });
    return;
  }

  const fechaCreation = new Date(fechaCreacion);

  const reporteActualizado = {
    titulo,
    descripcion,
    fechaCreacion: fechaCreation,
    idUsuario: new ObjectId(idUsuario),
    estado,
  };

  try {
    const result = await Reporte.updateOne(
      { _id: new ObjectId(id) },
      { $set: reporteActualizado }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Reporte NO encontrado' });
    }
    res.json({ message: 'Reporte Actualizado Correctamente' });
  } catch (error) {
    console.error('Error al Actualizar el Reporte:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}


async function deleteReporte(req, res) {
  const { id } = req.params;
  try {
    const result = await Reporte.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Reporte NO encontrado' });
    }
    res.json({ message: 'Reporte Eliminado Correctamente' });
  } catch (error) {
    console.error('Error al Eliminar Reporte:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}


module.exports = {
  getAllReportes,
  getReportesById,
  createReporte,
  updateReporte,
  deleteReporte,
};