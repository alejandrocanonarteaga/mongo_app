const mongoose = require('mongoose');

const universidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: String,
  telefono: String,
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now,
  },
});

const Universidad = mongoose.model('Universidad', universidadSchema);

module.exports = Universidad;
