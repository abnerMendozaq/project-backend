const express = require('express');
const consultoraController = require('../controllers/consultoraController');
const md_auth = require('../services/jwt-service');

const router = express.Router()
router.get('/consultoras', consultoraController.consultantList);
router.post('/registerconsultora', consultoraController.createConsultant);
router.post('/consultora', md_auth.decodeToken, consultoraController.getOne);
router.put('/consultora/:id', consultoraController.modifyConsultant);
router.delete('/consultora/:id', consultoraController.deleteConsultant);
module.exports = router;