const express = require('express');
const mongoose = require('mongoose');
const tipoProyectoRoutes = require('./routes/tipoProyectoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const universidadRoutes = require('./routes/universidadRoutes');
const etapaRoutes = require('./routes/etapaRoutes');
const proyectoRoutes = require('./routes/proyectoRoutes');

const app = express();

// Configuración de MongoDB
const mongoUri = 'mongodb://172.17.0.2:27017/tu_basedatos'; // Reemplaza con la dirección IP correcta
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Verificar la conexión a MongoDB
mongoose.connection.on('connected', () => {
  console.log('Conexión a MongoDB establecida');
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

// Configuración de rutas
app.use('/api', tipoProyectoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', universidadRoutes);
app.use('/api', etapaRoutes);
app.use('/api', proyectoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
