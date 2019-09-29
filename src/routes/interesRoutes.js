const express = require('express');
const md_auth = require('../services/jwt-service');
const interesController = require('../controllers/interesController');
const url = require('../utils/urlRoutes');

const router = express.Router()
router.get(url.listarIntereses, md_auth.decodeToken, interesController.interestList);
router.post(url.obtenerInteres, md_auth.decodeToken, interesController.getInterest);
router.post(url.crearInteres, md_auth.decodeToken, interesController.createInterest);
router.put(url.actualizarInteres, md_auth.decodeToken, interesController.modifyInterest);
router.delete(url.eliminarInteres, md_auth.decodeToken, interesController.deleteInterest);

module.exports = router;