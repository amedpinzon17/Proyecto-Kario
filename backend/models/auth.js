// auth.js (modelo de mongoose)
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    correo: String,
    nombre: String,
    userName: String,
    apellido: String,
    cargo: String,
    avatar: String,
    contrasena: String
});

const Usuarios = mongoose.model('Usuarios', usuarioSchema);

module.exports = {
    Usuarios
};
