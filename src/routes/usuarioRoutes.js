const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const md_auth = require('../services/jwt-service')

const router = express.Router()
router.get('/usuario', md_auth.decodeToken, usuarioController.userList);
router.post('/usuario/login', usuarioController.login);
router.post('/usuario', usuarioController.createUser);
router.get('/usuario/:id', usuarioController.getOne);
router.put('/usuario/:id', usuarioController.modifyUser);
router.delete('/usuario/:id', usuarioController.deleteUser);
module.exports = router;