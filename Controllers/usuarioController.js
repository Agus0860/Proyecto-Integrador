const { crearUsuario, eliminarUsuarioPorId, buscarPorMail } = require('../Models/usuarioModel.js');

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

async function buscarPorEmail(req, res) {
    const { email } = req.params;
    try {
        const results = await buscarPorMail(email);
        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(results[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function login(req, res) {
    try {
        const { mail, contrasenia } = req.body;
        const [result] = await buscarPorMail(mail);


        const iguales = bcrypt.compareSync(contrasenia, result.contrasenia);

        if (iguales) {
            let user = {
                nombre: result.nombre,
                apellido: result.apellido,
                mail: result.email
            }
            //firmar usuario
            jwt.sign(user, 'ultraMegaSecretPass', { expiresIn: '10000s' }, (err, token) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    res.status(200).json(
                        {
                            datos: user,
                            token: token
                        }
                    );
                }
            })
        } else {
            res.status(403).send({
                message: 'Contraseña Incorrecta'
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports = { registrarUsuario, eliminarUsuario, eliminarUsuario, buscarPorEmail };
