const Usuarios = require('../models/usuarios.js');

const getUsuarios = async (req, res) => {
  try {
    const indi = await Usuarios.find();
    res.json(indi);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
};

const postUsuarios = async (req, res) => {
  try {
    const nuevaArepa = await Usuarios.create(req.body);
    res.status(201).json(nuevaArepa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Error en el post' });
  }
};

 const deleteUsuarios = async (req, res) => {
    try {
      const ReservaId = req.params.id;
      const result = await Usuarios.findByIdAndDelete(ReservaId);
  
      if (!result) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };




const putUsuarios = async (req, res) => {
    try{
        const clienteId = req.params.id;
        const nuevaInfo = req.body;
        const result = await Usuarios.findByIdAndUpdate(clienteId, nuevaInfo, {
            new: true,
        }) 
        if(!result){
            return res.status(404).json({ message: 'Dato no encontrado'});
        }
        res.status(200).json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).json({ err: 'Error al editar la info'})
    }
}


module.exports = {
    getUsuarios,
    putUsuarios,
    deleteUsuarios,
    postUsuarios,
    
}