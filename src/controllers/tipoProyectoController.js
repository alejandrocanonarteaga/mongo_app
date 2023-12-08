const TipoProyecto = require('../models/TipoProyecto');

// Obtener todos los tipos de proyectos
exports.getTiposProyecto = async (req, res) => {
  try {
    const tiposProyecto = await TipoProyecto.find();
    res.json(tiposProyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tipo de proyecto
exports.createTipoProyecto = async (req, res) => {
  const tipoProyecto = new TipoProyecto(req.body);

  try {
    const nuevoTipoProyecto = await tipoProyecto.save();
    res.status(201).json(nuevoTipoProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un tipo de proyecto existente
exports.updateTipoProyecto = async (req, res) => {
  try {
    await TipoProyecto.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Tipo de proyecto actualizado exitosamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
