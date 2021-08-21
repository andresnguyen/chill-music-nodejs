import User from '../models/user.model'
import { generateAccessToken } from '../utils/auth'
import { toDate } from '../utils/date'
import createError from 'http-errors'

class AuthService {
    async logIn(user) {
        try {
            const token = generateAccessToken(user._id)
            return token
        } catch (error) {
            throw error
        }
    }

    async register(userRegister) {
        try {
            if (await user.findOne({ email: userRegister.email }))
                throw createError.BadRequest(`Email already exists`)
            userRegister.dateOfBirth = toDate(userRegister.dateOfBirth)
            const user = await new User({ ...userRegister }).save()
            const token = generateAccessToken(user._id)
            return { user, token }
        } catch (error) {
            throw error
        }
    }
}

export default new AuthService()
