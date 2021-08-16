import express from 'express'
const router = express.Router()
import SongController from '../controllers/song.controller'
import fileUploader from '../configs/cloudinary.config'

router.get('/', SongController.getAll)
router.get('/:id', SongController.getById)
router.post('/', fileUploader.array('file'), SongController.create)
router.patch('/:id', SongController.update)
router.delete('/:id', SongController.delete)

export default router
