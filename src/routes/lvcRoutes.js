const express = require('express');
const lvcController = require('../controllers/lvcController');

const router = express.Router()
router.get('/lvclist', lvcController.lvcList);
router.post('/lvc', lvcController.createLvc);
router.get('/lvc/:id', lvcController.getOne);
router.put('/lvc/:id', lvcController.modifyLvc);
router.delete('/lvc/:id', lvcController.deleteLvc);
module.exports = router;