const express = require('express');
const { registrarUsuario, eliminarUsuario } = require('../Controllers/usuarioController.js');
const router = express.Router();

router.post('/registro', registrarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;
