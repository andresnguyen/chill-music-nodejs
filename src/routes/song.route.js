import express from 'express'
const router = express.Router()
import SongController from '../controllers/song.controller'

router.get('/', SongController.getAll)
router.get('/:id', SongController.getOne)
router.post('/', SongController.postOne)
router.patch('/:id', SongController.updateOne)
router.delete('/:id', SongController.deleteOne)

export default router
