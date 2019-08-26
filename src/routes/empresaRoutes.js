const express = require('express');
const empresaController = require('../controllers/empresaController');

const router = express.Router()
router.post('/empresas', empresaController.companyList);
router.post('/empresa', empresaController.createCompany);
router.get('/empresa/:id', empresaController.getOne);
router.put('/empresa/:id', empresaController.modifyUser);
router.delete('/empresa/:id', empresaController.deleteUser);
module.exports = router;