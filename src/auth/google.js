import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../models/user.model'
import { toDate } from '../utils/date'
import {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    DOMAIN
} from '../constants/auth.constant'

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID,
            clientSecret:
                process.env.GOOGLE_CLIENT_SECRET || GOOGLE_CLIENT_SECRET,
            callbackURL: `${DOMAIN}/auth/google/callback`
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await User.findOne({ googleId: profile.id })
                if (user) return done(null, user)
                const newUser = await new User({
                    fullName: profile.displayName,
                    googleId: profile.id,
                    email: profile.email,
                    birthday: toDate(profile.birthday),
                    avatarUrl: profile.picture,
                    gender: profile.gender
                }).save()
                return done(null, newUser)
            } catch (error) {
                done(error)
            }
        }
    )
)

export default passport
