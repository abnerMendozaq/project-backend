const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router()
router.get('/usuario', usuarioController.userList);
router.post('/usuario', usuarioController.createUser);
router.get('/usuario/:id', usuarioController.getOne);
router.put('/usuario/:id', usuarioController.modifyUser);
router.delete('/usuario/:id', usuarioController.deleteUser);
module.exports = router;