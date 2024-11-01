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

async function crearUsuario(usuario) {
    const { nombre, apellido, email, contrasenia } = usuario;
    const query = 'INSERT INTO Usuario (nombre, apellido, email, contrasenia) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [nombre, apellido, email, contrasenia]);
    return result;
}

async function eliminarUsuarioPorId(id) {
    const query = 'DELETE FROM Usuario WHERE id_usuario = ?';
    await connection.execute(query, [id]);
}

module.exports = { crearUsuario, eliminarUsuarioPorId };