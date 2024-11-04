const express = require('express');
const { registrarUsuario, eliminarUsuario, buscarPorEmail } = require('../Controllers/usuarioController.js');
const router = express.Router();

router.post('/registro', registrarUsuario);
router.delete('/:id', eliminarUsuario);
router.get('/:mail', buscarPorEmail);

module.exports = router;
