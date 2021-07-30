import UserService from '../services/user.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await UserService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: users })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async getById(req, res, next) {
        const userId = req.params.id
        try {
            const user = await UserService.getById(userId)
            return res.status(OK).json({ ...singleResponse, data: user })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async create(req, res, next) {
        try {
            const newUser = await UserService.create(req.body)
            res.status(OK).json({ ...singleResponse, data: newUser })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async update(req, res, next) {
        const userId = req.params.id
        try {
            const newUser = await UserService.update(userId, req.body)
            res.status(OK).json({ ...singleResponse, data: newUser })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async delete(req, res, next) {
        const userId = req.params.id
        try {
            const user = await UserService.delete(userId)
            res.status(OK).json({ ...singleResponse, data: user })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }
}

export default new UserController()
