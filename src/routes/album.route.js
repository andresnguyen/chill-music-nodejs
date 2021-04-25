import express from 'express';
const router = express.Router();
import AlbumController from '../controllers/album.controller';

router.get('/', AlbumController.getAll);
router.get('/:id', AlbumController.getOne);
router.post('/', AlbumController.postOne);
router.patch('/:id', AlbumController.updateOne);
router.delete('/:id', AlbumController.deleteOne);

export default router;
