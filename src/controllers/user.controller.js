import UserService from '../services/user.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await UserService.getAll(req.query)
            return res.status(200).json({ ...pluralResponse, data: users })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async getOne(req, res, next) {
        const userId = req.params.id
        try {
            const user = await UserService.getOne(userId)
            return res.status(200).json({ ...singleResponse, data: user })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async postOne(req, res, next) {
        try {
            const newUser = await UserService.postOne(req.body)
            res.status(200).json({ ...singleResponse, data: newUser })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async updateOne(req, res, next) {
        const userId = req.params.id

        try {
            const newUser = await UserService.updateOne(userId, req.body)
            res.status(200).json({ ...singleResponse, data: newUser })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async deleteOne(req, res, next) {
        const userId = req.params.id

        try {
            const user = await UserService.deleteOne(userId)
            res.status(200).json({ ...singleResponse, data: user })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }
}

export default new UserController()
