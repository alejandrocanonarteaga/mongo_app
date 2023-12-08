const Etapa = require('../models/Etapa');

// Obtener todas las etapas
exports.getEtapas = async (req, res) => {
  try {
    const etapas = await Etapa.find();
    res.json(etapas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva etapa
exports.createEtapa = async (req, res) => {
  const etapa = new Etapa(req.body);

  try {
    const nuevaEtapa = await etapa.save();
    res.status(201).json(nuevaEtapa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una etapa existente
exports.updateEtapa = async (req, res) => {
  try {
    await Etapa.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Etapa actualizada exitosamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
