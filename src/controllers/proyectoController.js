const Proyecto = require('../models/Proyecto');

// Obtener todos los proyectos
exports.getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo proyecto
exports.createProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body);

  try {
    const nuevoProyecto = await proyecto.save();
    res.status(201).json(nuevoProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un proyecto existente
exports.updateProyecto = async (req, res) => {
  try {
    await Proyecto.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Proyecto actualizado exitosamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
