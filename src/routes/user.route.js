import express from 'express'
const router = express.Router()
import UserController from '../controllers/user.controller'

router.get('/', UserController.getAll)
router.get('/:id', UserController.getById)
router.post('/', UserController.create)
router.patch('/:id', UserController.update)
router.delete('/:id', UserController.delete)

export default router
