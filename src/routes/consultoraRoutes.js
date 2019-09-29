const express = require('express');
const consultoraController = require('../controllers/consultoraController');
const md_auth = require('../services/jwt-service');
const url = require('../utils/urlRoutes');

const router = express.Router();
router.get(url.listarConsultoras, md_auth.decodeToken, consultoraController.consultantList);
router.post(url.crearConsultora, md_auth.decodeToken, consultoraController.createConsultant);
router.post(url.obtenerConsultora, md_auth.decodeToken, consultoraController.getConsultant);
router.post(url.actualizarConsultora, md_auth.decodeToken, consultoraController.modifyConsultant);
router.post(url.eliminarConsultora, md_auth.decodeToken, consultoraController.deleteConsultant);

module.exports = router;