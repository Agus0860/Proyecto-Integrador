const express = require('express');
const app = express();
const morgan = require("morgan");
const mysql = require('mysql')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
morgan(":method :url :status :res[content-length] - :response-time ms");

const configuracion = require("./config.json");

const usuarioRoutes = require('./Routes/usuarioRoutes.js');
const articuloRoutes = require('./Routes/articuloRoutes.js');
const respuestaRoutes = require('./Routes/respuestaRoutes.js');
const comentarioRoutes = require('./Routes/comentarioRoutes.js');

app.use('/usuarios', usuarioRoutes);
app.use('/articulos', articuloRoutes);
app.use('/respuestas', respuestaRoutes);
app.use('/comentarios', comentarioRoutes);

// app.use('/api/usuarios'), require ('./Routes/usuarioRoutes.js');
// app.use('/api/articulos'), require ('./Routes/articuloRoutes.js');
// app.use('/api/respuestas'), require ('./Routes/respuestaRoutes.js');
// app.use('/api/comentarios'), require ('./Routes/comentarioRoutes.js');


app.listen(configuracion.server.port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sevidor encendido y escuchando en el puerto " + configuracion.server.port);
    }
  });