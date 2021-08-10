import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../models/user.model'
import { toDate } from '../utils/date'

passport.use(
    new GoogleStrategy(
        {
            clientID:
                '1053870740345-6429rcc6n3sbclr862234j3l3kf3k215.apps.googleusercontent.com',
            clientSecret: 'jSdL3Lk8Mt4ajjdVylHdKtly',
            callbackURL: 'https://50ec332cbc07.ngrok.io/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile)
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
