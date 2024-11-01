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

async function crearRespuesta(respuesta) {
    const { id_articulo, id_usuario, contenido } = respuesta;
    const query = 'INSERT INTO Respuesta (id_articulo, id_usuario, contenido) VALUES (?, ?, ?)';
    const [result] = await connection.execute(query, [id_articulo, id_usuario, contenido]);
    return result;
}

async function obtenerRespuestasPorArticulo(id_articulo) {
    const query = 'SELECT * FROM Respuesta WHERE id_articulo = ?';
    const [respuestas] = await connection.execute(query, [id_articulo]);
    return respuestas;
}

async function eliminarRespuestaPorId(id) {
    const query = 'DELETE FROM Respuesta WHERE id_respuesta = ?';
    await connection.execute(query, [id]);
}

module.exports = { crearRespuesta, obtenerRespuestasPorArticulo, eliminarRespuestaPorId };