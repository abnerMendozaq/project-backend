const express = require('express');
const interesController = require('../controllers/interesController');

const router = express.Router()
router.get('/intereslist', interesController.interesList);
router.post('/interes', interesController.createInteres);
router.post('/oneinteres', interesController.getOne);
router.put('/interes', interesController.modifyInteres);
router.delete('/interes/:id', interesController.deleteInteres);
module.exports = router;