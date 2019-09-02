const express = require('express');
const personaController = require('../controllers/personaController');

const router = express.Router()
// router.get('/', usuarioController.userList);
// router.post('/user', usuarioController.createUser);
router.post('/personaci',personaController.getPersonCi)
// router.get('/user/:id', usuarioController.getOne);
// router.put('/user/:id', usuarioController.modifyUser);
// router.delete('/user/:id', usuarioController.deleteUser);
module.exports = router;