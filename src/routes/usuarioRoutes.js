const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const md_auth = require('../services/jwt-service')

const router = express.Router()
router.get('/usuarios', md_auth.decodeToken, usuarioController.userList);
router.post('/usuario/login', usuarioController.login);
router.post('/usuario', usuarioController.createUser);
router.get('/usuario/:id', md_auth.decodeToken, usuarioController.getOne);
router.put('/usuario/:id', md_auth.decodeToken, usuarioController.modifyUser);
router.delete('/usuario/:id', md_auth.decodeToken, usuarioController.deleteUser);
module.exports = router;