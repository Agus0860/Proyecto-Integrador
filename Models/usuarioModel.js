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
    try {
        const { nombre, apellido, email, contrasenia } = usuario;
        const query = 'INSERT INTO Usuario (nombre, apellido, email, contrasenia) VALUES (?, ?, ?, ?)';
        const [result] = await connection.execute(query, [nombre, apellido, email, contrasenia]);
        return result;
    } catch (error) {
        throw new Error(error);
    }

}

async function eliminarUsuarioPorId(id) {
    const query = 'DELETE FROM Usuario WHERE id_usuario = ?';
    try {
        await connection.execute(query, [id]);
    } catch (error) {
        throw new Error('Error al eliminar el usuario: ' + error.message);
    }
}

async function buscarPorMail(mail) {

    try {
        const consulta = `SELECT nombre, apellido, email, contrasenia
                            FROM usuario where email = ?`;
        const [result] = await db.execute(consulta, [mail]);


        if (result.length == 0) {
            throw new Error(`Usuario no encontrado con el mail : ${mail}`);
        }

        return result;
        //si no saltó el error en el if anterior entoces se devuelve el resultado

    } catch (error) {
        throw new Error(error.message);
    }
},



module.exports = { crearUsuario, eliminarUsuarioPorId, buscarPorMail };