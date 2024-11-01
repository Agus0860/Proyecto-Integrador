const express = require('express');
const { agregarComentario, listarComentariosPorArticulo, listarComentariosPorRespuesta, eliminarComentario } = require('../Controllers/comentarioController.js');
const router = express.Router();

router.post('/', agregarComentario);
router.get('/articulo/:id_articulo', listarComentariosPorArticulo);
router.get('/respuesta/:id_respuesta', listarComentariosPorRespuesta);
router.delete('/:id', eliminarComentario);

module.exports = router;
