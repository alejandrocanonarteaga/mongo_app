const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

// Obtener todos los proyectos
router.get('/proyectos', proyectoController.getProyectos);

// Crear un nuevo proyecto
router.post('/proyectos', proyectoController.createProyecto);

// Actualizar un proyecto existente
router.put('/proyectos/:id', proyectoController.updateProyecto);

module.exports = router;
