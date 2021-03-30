const express = require('express');
const router = express.Router();
const SongController = require('../controllers/song.controller');

router.get('/', SongController.getAll);
router.get('/:id', SongController.getOne);
router.post('/', SongController.postOne);
router.patch('/:id', SongController.patchOne);
router.delete('/:id', SongController.deleteOne);

module.exports = router;
