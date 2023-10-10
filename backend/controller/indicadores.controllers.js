const Indicadores = require('../models/indicadores.js');





const getIndicadores = async (req, res) => {
  try {
    const indi = await Indicadores.find();
    res.json(indi);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
};







const postIndicadores = async (req, res) => {
  try {
    const nuevaArepa = await Indicadores.create(req.body);
    res.status(201).json(nuevaArepa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Error en el post' });
  }
};



 const deleteIndicadores = async (req, res) => {
    try {
      const ReservaId = req.params.id;
      const result = await Indicadores.findByIdAndDelete(ReservaId);
  
      if (!result) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };




const putIndicadores = async (req, res) => {
    try{
        const clienteId = req.params.id;
        const nuevaInfo = req.body;
        const result = await Indicadores.findByIdAndUpdate(clienteId, nuevaInfo, {
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
    getIndicadores,
    putIndicadores,
    deleteIndicadores,
    postIndicadores,
    
}