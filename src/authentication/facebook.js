import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import User from '../models/user.model'
import { toDate } from '../utils/date'
import {
    FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET,
    DOMAIN
} from '../constants/auth.constant'

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID || FACEBOOK_CLIENT_ID,
            clientSecret:
                process.env.FACEBOOK_CLIENT_SECRET || FACEBOOK_CLIENT_SECRET,
            callbackURL: `${DOMAIN}/auth/facebook/callback`,
            profileFields: [
                'id',
                'displayName',
                'email',
                'birthday',
                'gender',
                'picture'
            ]
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log({ profile: profile })
            try {
                const user = await User.findOne({ facebookId: profile.id })
                if (user) return done(null, user)
                const newUser = await new User({
                    facebookId: profile.id,
                    fullName: profile.displayName,
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
