const express = require('express');
const router = express.Router();
const ArtistController = require('../controllers/artist.controller');

router.get('/', ArtistController.getAll);
router.get('/:id', ArtistController.getOne);
router.post('/', ArtistController.postOne);
router.patch('/:id', ArtistController.patchOne);
router.delete('/:id', ArtistController.deleteOne);

module.exports = router;
