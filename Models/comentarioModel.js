require('rootpath')();

const mysql = require("mysql");
const configuracion = require("config.json");
const { query } = require('express');

const connection = mysql.createConnection(configuracion.database);

connection.connect((err) => {
    if (err) {
        console.log(err.code);
    } else {
        console.log("BD conectada");
    }
});

async function crearComentario(comentario) {
    const { id_respuesta, id_articulo, id_usuario, contenido } = comentario;
    const query = 'INSERT INTO Comentario (id_respuesta, id_articulo, id_usuario, contenido) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [id_respuesta, id_articulo, id_usuario, contenido]);
    return result;
}

async function obtenerComentariosPorArticulo(id_articulo) {
    const query = 'SELECT * FROM Comentario WHERE id_articulo = ?';
    const [comentarios] = await connection.execute(query, [id_articulo]);
    return comentarios;
}

async function obtenerComentariosPorRespuesta(id_respuesta) {
    const query = 'SELECT * FROM Comentario WHERE id_respuesta = ?';
    const [comentarios] = await connection.execute(query, [id_respuesta]);
    return comentarios;
}

async function eliminarComentarioPorId(id) {
    const query = 'DELETE FROM Comentario WHERE id_comentario = ?';
    await pool.execute(query, [id]);
}

module.exports = { crearComentario, obtenerComentariosPorArticulo, obtenerComentariosPorRespuesta, eliminarComentarioPorId };