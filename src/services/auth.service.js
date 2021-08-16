import User from '../models/user.model'
import { generateAccessToken } from '../utils/auth'
import { toDate } from '../utils/date'

class AuthService {
    async logIn(user) {
        try {
            const token = generateAccessToken(user._id)
            return token
        } catch (error) {
            throw new Error(error)
        }
    }

    async register(userRegister) {
        try {
            userRegister.dateOfBirth = toDate(userRegister.dateOfBirth)
            const user = await new User({ ...userRegister }).save()
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new AuthService()
