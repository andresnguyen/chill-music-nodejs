import UserService from '../services/user.service'

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await UserService.getAllUser()
            return res.status(200).json({ users })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async getOne(req, res, next) {
        const userId = req.params.id
        try {
            const user = await UserService.getOneUser(userId)
            return res.status(200).json({ user })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const user = { name }
        try {
            await UserService.createOneUser(user)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async updateOne(req, res, next) {
        const userId = req.params.id
        const { name } = req.body
        const user = { name }

        try {
            await UserService.updateOneUser(userId, user)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async deleteOne(req, res, next) {
        const userId = req.params.id

        try {
            await UserService.deleteOneUser(userId)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

export default new UserController()
