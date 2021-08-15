import User from '../models/user.model'
import { encodePassword, generatorAccessToken } from '../utils/auth'

class AuthService {
    async logIn(user) {
        try {
            const token = generatorAccessToken(user._id)
            return token
        } catch (error) {
            throw new Error(error)
        }
    }

    async register(userRegister) {
        try {
            userRegister.password = await encodePassword(userRegister.password)
            const user = await new User({ ...userRegister }).save()
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new AuthService()
