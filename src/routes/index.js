const express = require('express');
const indexController = require('../controllers/index');

const router = express.Router()
router.get('/index', indexController.indexList);
module.exports = router;