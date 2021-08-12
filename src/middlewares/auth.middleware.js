import { verifyUser } from '../utils/auth'
import User from '../models/user.model'
import privateRoutes from '../constants/privateRoutes'

class AuthMiddleware {
    async verifyUser(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        try {
            if (token == null) throw new Error('Token is empty')
            const userId = verifyUser(token)
            const user = await User.findById(userId)
            if (!user) throw new Error(`User doesn't exists`)
            if (user.active === 0) throw new Error(`User isn't active`)
            req.user = user
            next()
        } catch (error) {
            privateRoutes.forEach((privateRoute) => {
                if (originalUrl.indexOf(privateRoute) === 0) {
                    next(error)
                    return
                }
            })
            next()
        }
    }
}

export default new AuthMiddleware()
