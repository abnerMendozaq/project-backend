const express = require('express');
const ufvController = require('../controllers/ufvController');
const md_auth = require('../services/jwt-service')

const router = express.Router()
router.get('/ufvs', md_auth.decodeToken, ufvController.ufvList);
router.post('/ufv', ufvController.createUfv);
router.get('/ufv/:id', md_auth.decodeToken, ufvController.getOne);
router.put('/ufv/:id', md_auth.decodeToken, ufvController.modifyUfv);
router.delete('/ufv/:id', md_auth.decodeToken,ufvController.deleteUfv);
module.exports = router;