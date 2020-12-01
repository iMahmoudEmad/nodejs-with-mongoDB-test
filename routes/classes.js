const express = require('express');
const router = express.Router();

const ClassesController = require('../controllers/ClassesController');

router.post('/', ClassesController.index);
router.post('/store', ClassesController.store);
// router.post('/update', ClassesController.update);

module.exports = router;