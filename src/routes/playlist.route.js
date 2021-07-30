import express from 'express'
const router = express.Router()
import PlaylistController from '../controllers/playlist.controller'

router.get('/', PlaylistController.getAll)
router.get('/:id', PlaylistController.getById)
router.post('/', PlaylistController.create)
router.patch('/:id', PlaylistController.update)
router.delete('/:id', PlaylistController.delete)

export default router
