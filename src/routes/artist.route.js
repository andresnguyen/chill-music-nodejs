import express from 'express'
const router = express.Router()
import ArtistController from '../controllers/artist.controller'

router.get('/', ArtistController.getAll)
router.get('/:id', ArtistController.getById)
router.get('/:slug/slugs', ArtistController.getBySlug)
router.post('/', ArtistController.create)
router.patch('/:id', ArtistController.update)
router.delete('/:id', ArtistController.delete)

export default router
