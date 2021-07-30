import express from 'express'
const router = express.Router()
import SongController from '../controllers/song.controller'

router.get('/', SongController.getAll)
router.get('/:id', SongController.getById)
router.post('/', SongController.create)
router.patch('/:id', SongController.update)
router.delete('/:id', SongController.delete)

export default router
