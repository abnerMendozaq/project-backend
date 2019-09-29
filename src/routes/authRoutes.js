const express = require('express');
const authController = require('../controllers/authController');
const url = require('../utils/urlRoutes');

const router = express.Router()
router.post(url.login, authController.login);

module.exports = router;