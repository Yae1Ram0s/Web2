const express = require('express');
const router = express.Router();

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.send('Lista de usuarios');
});

// Obtener un usuario específico
router.get('/:id', (req, res) => {
  res.send(`Detalles del usuario: ${req.params.id}`);
});

module.exports = router;