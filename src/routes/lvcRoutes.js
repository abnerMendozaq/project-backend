const express = require('express');
const md_auth = require('../services/jwt-service');
const lvcController = require('../controllers/lvcController');
const url = require('../utils/urlRoutes');

const router = express.Router()
router.post(url.listarLvcs, md_auth.decodeToken, lvcController.lvcList);
router.post(url.obtenerLvc, md_auth.decodeToken, lvcController.getlvc);
// router.get('/lvc/:id',md_auth.decodeToken, lvcController.getOne);
// router.put('/lvc/:id',md_auth.decodeToken, lvcController.modifyLvc);
// router.delete('/lvc/:id',md_auth.decodeToken, lvcController.deleteLvc);

module.exports = router;