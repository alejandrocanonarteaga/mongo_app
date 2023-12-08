const Universidad = require('../models/Universidad');

// Obtener todas las universidades
exports.getUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.find();
    res.json(universidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva universidad
exports.createUniversidad = async (req, res) => {
  const universidad = new Universidad(req.body);

  try {
    const nuevaUniversidad = await universidad.save();
    res.status(201).json(nuevaUniversidad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una universidad existente
exports.updateUniversidad = async (req, res) => {
  try {
    await Universidad.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Universidad actualizada exitosamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
