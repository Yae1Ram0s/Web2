const express = require('express');
const app = express();
const port = 3000;

// Importar rutas
const rutainicio = require('./rutas/inicio');
const rutausuarios = require('./rutas/usuarios');
const rutaproductos = require('./rutas/productos');
const rutacontacto = require('./rutas/contacto');

// Usar las rutas
app.use('/', rutainicio);
app.use('/usuarios', rutausuarios);
app.use('/productos', rutaproductos);
app.use('/contacto', rutacontacto);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});