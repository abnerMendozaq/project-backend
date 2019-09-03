const express = require('express');
const ufvController = require('../controllers/ufvController');
const md_auth = require('../services/jwt-service');
const router = express.Router();

router.get('/ufvs', md_auth.decodeToken, ufvController.ufvList);
router.post('/ufv', md_auth.decodeToken, ufvController.createUfv);
router.post('/oneufv', md_auth.decodeToken, ufvController.getOne);
router.put('/ufv', md_auth.decodeToken, ufvController.modifyUfv);
router.delete('/ufv', md_auth.decodeToken, ufvController.deleteUfv);
module.exports = router;