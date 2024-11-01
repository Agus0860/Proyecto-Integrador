const express = require('express');
const { obtenerArticulos, crearNuevoArticulo, eliminarArticulo } = require('../Controllers/articuloController.js');
const router = express.Router();

router.get('/', obtenerArticulos);
router.post('/', crearNuevoArticulo);
router.delete('/:id', eliminarArticulo);

module.exports = router;

