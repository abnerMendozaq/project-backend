const express = require('express');
const empresaController = require('../controllers/empresaController');
const md_auth = require('../services/jwt-service');

const router = express.Router()
router.post('/empresas', md_auth.decodeToken, empresaController.companyList);
router.post('/registraempresa', empresaController.createCompany);
router.post('/empresa', empresaController.getOne);
router.put('/empresa/:id', empresaController.modifyUser);
router.delete('/empresa/:id', empresaController.deleteUser);
module.exports = router;