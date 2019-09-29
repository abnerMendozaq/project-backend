const express = require('express');
const md_auth = require('../services/jwt-service');
const personaController = require('../controllers/personaController');
const url = require('../utils/urlRoutes');

const router = express.Router();
router.get(url.listarPersonas, md_auth.decodeToken, personaController.personList);
router.post(url.obtenerPersona, md_auth.decodeToken, personaController.getPerson);
router.post(url.crearPersona, md_auth.decodeToken, personaController.createPerson)
router.post(url.actualizarPersona, md_auth.decodeToken, personaController.modifyPerson);
router.post(url.eliminarPersona, md_auth.decodeToken, personaController.deletePerson);

module.exports = router;