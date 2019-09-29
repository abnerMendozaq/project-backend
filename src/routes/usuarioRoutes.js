const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const md_auth = require('../services/jwt-service');
const url = require('../utils/urlRoutes');

const router = express.Router()
router.get(url.listarUsuarios, md_auth.decodeToken, usuarioController.userList);
router.post(url.obtenerUsuario, md_auth.decodeToken, usuarioController.getUser);
router.post(url.crearUsuario, md_auth.decodeToken, usuarioController.createUser);
router.post(url.actualizarUsuario, md_auth.decodeToken, usuarioController.modifyUser);
router.put(url.eliminarUsuario, md_auth.decodeToken, usuarioController.deleteUser);

module.exports = router;