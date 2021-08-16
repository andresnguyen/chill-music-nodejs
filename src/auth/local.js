import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.model'
import { verifyPassword } from '../utils/auth'

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await User.findOne({ email: username })
                    .select('+password')
                    .lean()
                console.log(user)
                if (!user) throw new Error('User not found')
                if (!(await verifyPassword(user.password, password)))
                    throw new Error('Password not valid')
                delete user.password
                done(null, user)
            } catch (error) {
                done(error)
            }
        }
    )
)

export default passport
