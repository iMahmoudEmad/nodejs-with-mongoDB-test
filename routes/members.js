const express = require('express');
const router = express.Router();

const MembersController = require('../controllers/MembersControllers');

router.get('/', MembersController.index);
router.post('/show', MembersController.show);
router.post('/store', MembersController.store);
router.post('/update', MembersController.update);
router.post('/delete', MembersController.destroy);

module.exports = router;