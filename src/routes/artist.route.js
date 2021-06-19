import express from 'express'
const router = express.Router()
import ArtistController from '../controllers/artist.controller'

router.get('/', ArtistController.getAll)
router.get('/:id', ArtistController.getOne)
router.get('/:slug/slugs', ArtistController.getOneBySlug)
router.post('/', ArtistController.postOne)
router.patch('/:id', ArtistController.updateOne)
router.delete('/:id', ArtistController.deleteOne)

export default router
