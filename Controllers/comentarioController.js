const { crearComentario, obtenerComentariosPorArticulo, obtenerComentariosPorRespuesta } = require('../Models/comentarioModel.js');

async function agregarComentario(req, res) {
    try {
        const result = await crearComentario(req.body);
        res.status(201).json({ mensaje: 'Comentario agregado exitosamente', result });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar comentario' });
    }
}

async function listarComentariosPorArticulo(req, res) {
    try {
        const comentarios = await obtenerComentariosPorArticulo(req.params.id_articulo);
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener comentarios del artículo' });
    }
}

async function listarComentariosPorRespuesta(req, res) {
    try {
        const comentarios = await obtenerComentariosPorRespuesta(req.params.id_respuesta);
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener comentarios de la respuesta' });
    }
}

async function eliminarComentario(req, res) {
    try {
        const { id } = req.params;
        await eliminarComentarioPorId(id);
        res.status(200).json({ mensaje: 'Comentario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar comentario' });
    }
}

module.exports = { agregarComentario, listarComentariosPorArticulo, listarComentariosPorRespuesta, eliminarComentario };
