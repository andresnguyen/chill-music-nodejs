const express = require('express');
const router = express.Router();
const AlbumController = require('../controllers/album.controller');

router.get('/', AlbumController.getAll);
router.get('/:id', AlbumController.getOne);
router.post('/', AlbumController.postOne);
router.patch('/:id', AlbumController.updateOne);
router.delete('/:id', AlbumController.deleteOne);

module.exports = router;
