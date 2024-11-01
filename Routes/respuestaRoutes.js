const express = require('express');
const { agregarRespuesta, listarRespuestasPorArticulo, eliminarRespuesta } = require('../Controllers/respuestaController.js');
const router = express.Router();

router.post('/', agregarRespuesta);
router.get('/articulo/:id_articulo', listarRespuestasPorArticulo);
router.delete('/:id', eliminarRespuesta);

module.exports = router;
