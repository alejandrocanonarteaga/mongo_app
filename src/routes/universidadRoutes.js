const express = require('express');
const router = express.Router();
const universidadController = require('../controllers/universidadController');

// Obtener todas las universidades
router.get('/universidades', universidadController.getUniversidades);

// Crear una nueva universidad
router.post('/universidades', universidadController.createUniversidad);

// Actualizar una universidad existente
router.put('/universidades/:id', universidadController.updateUniversidad);

module.exports = router;
