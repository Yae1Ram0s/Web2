const express = require('express');
const router = express.Router();

// Obtener todos los productos
router.get('/', (req, res) => {
  res.send('Lista de productos');
});

// Obtener un producto específico
router.get('/:id', (req, res) => {
  res.send(`Detalles del producto: ${req.params.id}`);
});

module.exports = router;