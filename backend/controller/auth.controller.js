// auth.routes.js
const bcryptjs = require('bcryptjs');
const { Usuarios} = require ('../models/auth.js');
const {createAccessToken} = require('../libs/jwt.js');



const register = async (req, res) => {
   
    const { correo, nombre, userName, contrasena, cargo, avatar, apellido} = req.body

    try{

        const passworkHash = await bcryptjs.hash(contrasena, 10)
        const newUser = new Usuarios({
                correo,
                nombre,
                userName,
                apellido,
                cargo,
                avatar,
                contrasena: passworkHash,
            });

            const userSaved = await newUser.save();
            const token = await createAccessToken({id: userSaved._id})
            res.cookie('token', token) 
             res.send({
                id: userSaved._id,
                correo: userSaved.correo,
                nombre: userSaved.nombre,
                userName: userSaved.userName,
                cargo: userSaved.cargo,
                avatar: userSaved.avatar,
                apellido: userSaved.apellido, 
            })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


const login = async (req, res) => {
   
    const { correo, contrasena, } = req.body

    try{

        const suerFound = await Usuarios.findOne({correo});
        if(!suerFound)
        return res.status(400).json({message: "User not found"})

        const passworkCompare = await bcryptjs.compare(contrasena, suerFound.contrasena);
        if(!passworkCompare)
         return res.status(400).json({ 
        message: "Incorrect Passwork "
    })


            const token = await createAccessToken({id: suerFound._id})

            res.cookie('token', token) 
             res.json({
                id: suerFound._id,
                correo: suerFound.correo,
                nombre: suerFound.nombre,
                userName: suerFound.userName,
                cargo: suerFound.cargo,
                avatar: suerFound.avatar,
                apellido: suerFound.apellido, 
            })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


const logout = async (req, res) => {
    res.cookie('token', "",  {
        expires: new Date(0)
    })
    return res.sendStatus(200);
}

const profil = async (req, res) => {
    const userFound = await  Usuarios.findById(req.user.id)

    if(!userFound) return res.status(400).json({ message: 'user not found'})

    return res.json({
        id: userFound._id,
        nombre: userFound.nombre,
        apellido: userFound.apellido,
        cargo: userFound.cargo,
        userName: userFound.userName,
        avatar: userFound.avatar,
        correo: userFound.correo

    })
    
}

module.exports = {
  register,
  login,
  logout,
  profil
};
