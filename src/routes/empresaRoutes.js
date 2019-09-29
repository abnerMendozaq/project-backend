const express = require('express');
const empresaController = require('../controllers/empresaController');
const md_auth = require('../services/jwt-service');
const url = require('../utils/urlRoutes');

const router = express.Router()
router.post(url.listarEmpresas, md_auth.decodeToken, empresaController.companyList);
router.post(url.obtenerEmpresa, md_auth.decodeToken, empresaController.getCompany);
router.post(url.crearEmpresa, md_auth.decodeToken, empresaController.createCompany);
router.post(url.actualizarEmpresa, md_auth.decodeToken, empresaController.modifyCompany);
router.post(url.eliminarEmpresa, md_auth.decodeToken, empresaController.deleteCompany);

module.exports = router;