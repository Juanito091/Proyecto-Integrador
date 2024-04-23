const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

const {renderSignUpForm, signup, renderSigninForm, signin, logOut} = require('../controller/user.controller');

router.get('/signup', renderSignUpForm);

router.post('/signup', signup); 

router.get('/signin', renderSigninForm);

router.post('/signup', signin);

router.get('/logout', logOut);

// Ruta para registrar un nuevo usuario

/*
router.post('/registro', async (req, res) => {
  console.log('hicieste un post a register wachin')

  res.status(201);
  res.send('done');
  // try {
  //   // Obtener los datos del formulario de registro
  //   const { nombre, email, contraseña } = req.body;

  //   // Verificar si el email ya está registrado
  //   const usuarioExistente = await Usuario.findOne({ email });
  //   if (usuarioExistente) {
  //     return res.status(400).json({ error: 'El email ya está registrado' });
  //   }

  //   // Crear un nuevo usuario
  //   const nuevoUsuario = new Usuario({ nombre, email, contraseña });
  //   await nuevoUsuario.save();

  //   res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  // } catch (error) {
  //   res.status(500).json({ error: 'Error al registrar el usuario' });
  // }
});
*/


module.exports = router;