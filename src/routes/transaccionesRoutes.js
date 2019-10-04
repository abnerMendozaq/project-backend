const express = require('express');
const transaccionesController = require('../controllers/transaccionesController');
const md_auth = require('../services/jwt-service');
const url = require('../utils/urlRoutes');

const router = express.Router()
router.post(url.crearUsuarioEmpresa, transaccionesController.createUserCompany);
router.post(url.crearUsuarioConsultora, transaccionesController.createUserConsultant);
router.post(url.crearLvcForm200_400, md_auth.decodeToken, transaccionesController.createLvcForm200Form400);
router.post('/transacciones/:id');
router.post('/transacciones/:id');

module.exports = router;