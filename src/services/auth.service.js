import User from '../models/user.model'

class AuthService {
    async register(userRegister) {
        try {
            const user = await new User({ ...userRegister }).save()
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new AuthService()
