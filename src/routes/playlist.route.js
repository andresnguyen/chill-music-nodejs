import express from 'express';
const router = express.Router();
import PlaylistController from '../controllers/playlist.controller';

router.get('/', PlaylistController.getAll);
router.get('/:id', PlaylistController.getOne);
router.post('/', PlaylistController.postOne);
router.patch('/:id', PlaylistController.updateOne);
router.delete('/:id', PlaylistController.deleteOne);

export default router;
