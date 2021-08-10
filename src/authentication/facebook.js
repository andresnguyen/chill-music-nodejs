import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import User from '../models/user.model'
import { toDate } from '../utils/date'

passport.use(
    new FacebookStrategy(
        {
            clientID: '1583769365305136',
            clientSecret: 'e0478de802a032f3feeed01422959601',
            callbackURL: 'https://334096a64cc3.ngrok.io/auth/facebook/callback',
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
            console.log({ profile })
            try {
                const user = await User.findOne({ facebookId: profile.id })
                if (user) return done(null, user)
                const newUser = await new User({
                    fullName: profile.displayName,
                    facebookId: profile.id,
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
