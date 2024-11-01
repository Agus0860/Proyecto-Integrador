const { crearArticulo, listarArticulos } = require('../Models/articuloModel.js');

async function obtenerArticulos(req, res) {
    try {
        const articulos = await listarArticulos();
        res.status(200).json(articulos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener artículos' });
    }
}

async function crearNuevoArticulo(req, res) {
    try {
        const result = await crearArticulo(req.body);
        res.status(201).json({ mensaje: 'Artículo creado exitosamente', result });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear artículo' });
    }
}

async function eliminarArticulo(req, res) {
    try {
        const { id } = req.params;
        await eliminarArticuloPorId(id);
        res.status(200).json({ mensaje: 'Artículo eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar artículo' });
    }
}

module.exports = { obtenerArticulos, crearNuevoArticulo, eliminarArticulo };
