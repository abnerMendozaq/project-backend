const express = require('express');
const consultoraController = require('../controllers/consultoraController');

const router = express.Router()
router.get('/consultora', consultoraController.consultantList);
router.post('/consultora', consultoraController.createConsultant);
router.get('/consultora/:id', consultoraController.getOne);
router.put('/consultora/:id', consultoraController.modifyConsultant);
router.delete('/consultora/:id', consultoraController.deleteConsultant);
module.exports = router;