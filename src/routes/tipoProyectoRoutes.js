const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoController');

// Obtener todos los tipos de proyectos
router.get('/tiposproyecto', tipoProyectoController.getTiposProyecto);

// Crear un nuevo tipo de proyecto
router.post('/tiposproyecto', tipoProyectoController.createTipoProyecto);

// Actualizar un tipo de proyecto existente
router.put('/tiposproyecto/:id', tipoProyectoController.updateTipoProyecto);

module.exports = router;
