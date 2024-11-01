const { crearUsuario } = require('../Models/usuarioModel.js');

async function registrarUsuario(req, res) {
    try {
        const result = await crearUsuario(req.body);
        res.status(201).json({ mensaje: 'Usuario creado exitosamente', result });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear usuario' });
    }
}

async function eliminarUsuario(req, res) {
    try {
        const { id } = req.params;
        await eliminarUsuarioPorId(id);
        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
}

module.exports = { registrarUsuario, eliminarUsuario, eliminarUsuario };
