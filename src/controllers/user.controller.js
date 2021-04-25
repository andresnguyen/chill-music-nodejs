import UserService from '../services/user.service'
import { one, many, failure } from '../constants/response.constant'

class UserController {
    async getAll(req, res, next) {
        let { skip, limit } = req.query
        skip = parseInt(skip, 10) || 0
        limit = parseInt(limit, 10) || 10

        try {
            const users = await UserService.getAllUser(skip, limit)
            return res.status(200).json({ ...many, data: users })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async getOne(req, res, next) {
        const userId = req.params.id
        try {
            const user = await UserService.getOneUser(userId)
            return res.status(200).json({ ...one, data: user })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const user = { name }
        try {
            const newUser = await UserService.createOneUser(user)
            res.status(200).json({ ...one, data: newUser })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async updateOne(req, res, next) {
        const userId = req.params.id
        const { name } = req.body
        const user = { name }

        try {
            const newUser = await UserService.updateOneUser(userId, user)
            res.status(200).json({ ...one, data: newUser })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async deleteOne(req, res, next) {
        const userId = req.params.id

        try {
            await UserService.deleteOneUser(userId)
            res.status(200).json({ ...one })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }
}

export default new UserController()
