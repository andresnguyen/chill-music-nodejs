import express from 'express'
const router = express.Router()
import AlbumController from '../controllers/album.controller'

router.get('/', AlbumController.getAll)
router.get('/:id', AlbumController.getById)
router.post('/', AlbumController.create)
router.patch('/:id', AlbumController.update)
router.delete('/:id', AlbumController.delete)

export default router
