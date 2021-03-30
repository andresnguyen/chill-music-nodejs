const express = require('express');
const router = express.Router();
const PlaylistController = require('../controllers/playlist.controller');

router.get('/', PlaylistController.getAll);
router.get('/:id', PlaylistController.getOne);
router.post('/', PlaylistController.postOne);
router.patch('/:id', PlaylistController.patchOne);
router.delete('/:id', PlaylistController.deleteOne);

module.exports = router;
