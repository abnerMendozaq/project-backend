const express = require('express');
const transaccionesController = require('../controllers/transaccionesController');

const router = express.Router()
router.post('/transacciones/empresa', transaccionesController.createUserCompany);
router.post('/transacciones/consultora',transaccionesController.createUserConsultant);
router.post('/transacciones/:id', );
router.post('/transacciones/:id', );
router.post('/transacciones/:id', );
module.exports = router;