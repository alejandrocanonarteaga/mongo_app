const mongoose = require('mongoose');

const etapaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now,
  },
});

const Etapa = mongoose.model('Etapa', etapaSchema);

module.exports = Etapa;
