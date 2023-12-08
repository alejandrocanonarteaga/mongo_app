const Cliente = require('../models/Cliente');

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  const cliente = new Cliente(req.body);

  try {
    const nuevoCliente = await cliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un cliente existente
exports.updateCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Cliente actualizado exitosamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
