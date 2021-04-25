import express from 'express';
const router = express.Router();
import UserController from '../controllers/user.controller';

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.postOne);
router.patch('/:id', UserController.updateOne);
router.delete('/:id', UserController.deleteOne);

export default router;
