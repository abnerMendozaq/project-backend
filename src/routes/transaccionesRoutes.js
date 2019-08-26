const express = require('express');
const transaccionesController = require('../controllers/transaccionesController');
const md_auth = require('../services/jwt-service');

const router = express.Router()
router.post('/transacciones/empresa', transaccionesController.createUserCompany);
router.post('/transacciones/consultora', transaccionesController.createUserConsultant);
router.post('/transacciones/lvcform', md_auth.decodeToken, transaccionesController.createLvcForm200Form400);
router.post('/transacciones/:id');
router.post('/transacciones/:id');
module.exports = router;