const { crearRespuesta, obtenerRespuestasPorArticulo } = require('../Models/respuestaModel.js');

async function agregarRespuesta(req, res) {
    try {
        const result = await crearRespuesta(req.body);
        res.status(201).json({ mensaje: 'Respuesta agregada exitosamente', result });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar respuesta' });
    }
}

async function listarRespuestasPorArticulo(req, res) {
    try {
        const respuestas = await obtenerRespuestasPorArticulo(req.params.id_articulo);
        res.status(200).json(respuestas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener respuestas del artículo' });
    }
}

async function eliminarRespuesta(req, res) {
    try {
        const { id } = req.params;
        await eliminarRespuestaPorId(id);
        res.status(200).json({ mensaje: 'Respuesta eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar respuesta' });
    }
}

module.exports = { agregarRespuesta, listarRespuestasPorArticulo, eliminarRespuesta };
