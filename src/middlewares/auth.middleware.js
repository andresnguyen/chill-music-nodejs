import { verifyAccessToken } from '../utils/auth'
import User from '../models/user.model'
import privateRoutes from '../constants/privateRoutes'
import { FORBIDDEN, UNAUTHORIZED } from '../constants/httpStatusCode.constant'

class AuthMiddleware {
    async verifyUser(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        try {
            if (token == null) throw new Error('Token is empty')
            const { userId } = await verifyAccessToken(token)
            const user = await User.findById(userId)
            if (!user) throw new Error(`User doesn't exists`)
            if (user.active === 0) throw new Error(`User isn't active`)
            req.user = user
            console.log(user)
            next()
        } catch (error) {
            privateRoutes.forEach((privateRoute) => {
                if (req.originalUrl.indexOf(privateRoute) === 4) {
                    error.status = UNAUTHORIZED
                    next(error)
                    return
                }
            })
            next()
        }
    }

    async verifyPermission(req, res, next) {
        const user = req.user
        try {
            if (user.role < 1) throw new Error('Forbidden')
        } catch (error) {
            error.status = FORBIDDEN
            next(error)
        }
    }
}

export default new AuthMiddleware()
