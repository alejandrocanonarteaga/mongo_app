const express = require('express');
const router = express.Router();
const etapaController = require('../controllers/etapaController');

// Obtener todas las etapas
router.get('/etapas', etapaController.getEtapas);

// Crear una nueva etapa
router.post('/etapas', etapaController.createEtapa);

// Actualizar una etapa existente
router.put('/etapas/:id', etapaController.updateEtapa);

module.exports = router;
