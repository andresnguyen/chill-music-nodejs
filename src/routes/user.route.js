const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.postOne);
router.patch('/:id', UserController.updateOne);
router.delete('/:id', UserController.deleteOne);

module.exports = router;
