const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
  
    nombre: {
        type: String,
     
    },

    apellido: {
        type: String,
     
    },

    correo: {
        type: String,
    
    }, 

    cargo: {
        type: String,
     
    },

    avatar: {
        type: String,
     
    },

    userName: {
        type: String,
     
    },


    contrasena: {
        type: String,
     
    },

   
    
});


const Usuarios = mongoose.model('Usuario', usuarioSchema, "usuarios");

module.exports = Usuarios;