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

async function crearArticulo(articulo) {
    const { id_usuario, titulo, contenido } = articulo;
    const query = 'INSERT INTO Articulo (id_usuario, titulo, contenido) VALUES (?, ?, ?)';
    const [result] = await connection.execute(query, [id_usuario, titulo, contenido]);
    return result;
}

async function listarArticulos() {
    const [articulos] = await connection.query('SELECT * FROM Articulo');
    return articulos;
}

async function eliminarArticuloPorId(id) {
    const query = 'DELETE FROM Articulo WHERE id_articulo = ?';
    await connection.execute(query, [id]);
}

module.exports = { crearArticulo, listarArticulos, eliminarArticuloPorId };
