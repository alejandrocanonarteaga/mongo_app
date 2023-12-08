const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Obtener todos los clientes
router.get('/clientes', clienteController.getClientes);

// Crear un nuevo cliente
router.post('/clientes', clienteController.createCliente);

// Actualizar un cliente existente
router.put('/clientes/:id', clienteController.updateCliente);

module.exports = router;
