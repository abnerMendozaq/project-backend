const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router()
router.get('/', usuarioController.userList);
router.post('/user', usuarioController.createUser);
router.get('/user/:id', usuarioController.getOne);
router.put('/user/:id', usuarioController.modifyUser);
router.delete('/user/:id', usuarioController.deleteUser);
module.exports = router;