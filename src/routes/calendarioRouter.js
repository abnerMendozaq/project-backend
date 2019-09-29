const express = require('express');
const md_auth = require('../services/jwt-service');
const calendarioController = require('../controllers/calendarioController');
const url = require('../utils/urlRoutes');

const router = express.Router();
router.post(url.listarFeriados, md_auth.decodeToken, calendarioController.getHollidays);
router.post(url.agregarFeriados, md_auth.decodeToken, calendarioController.createHollidays);

module.exports = router;