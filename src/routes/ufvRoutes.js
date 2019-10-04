const express = require('express');
const ufvController = require('../controllers/ufvController');
const md_auth = require('../services/jwt-service');
const url = require('../utils/urlRoutes');

const router = express.Router();
router.get(url.listarUfvs, md_auth.decodeToken, ufvController.ufvList);
router.post(url.obtenerUfv, md_auth.decodeToken, ufvController.getUfv);
router.post(url.crearUfv, md_auth.decodeToken, ufvController.createUfv);
router.post(url.crearUfvs, md_auth.decodeToken, ufvController.createUfvs);
router.put(url.actualizarUfv, md_auth.decodeToken, ufvController.modifyUfv);
router.put(url.eliminarUfv, md_auth.decodeToken, ufvController.deleteUfv);

module.exports = router;