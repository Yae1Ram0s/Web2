const express = require('express');
const router = express.Router();

// Mostrar formulario de contacto
router.get('/', (req, res) => {
  res.send('Formulario de contacto');
});

// Procesar formulario de contacto
router.post('/', (req, res) => {
  res.send('Mensaje enviado');
});

module.exports = router;