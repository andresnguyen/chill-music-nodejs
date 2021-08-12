import express from 'express'
const router = express.Router()
import AuthController from '../controllers/auth.controller'
import passportFacebook from '../auth/facebook'
import passportGoogle from '../auth/google'
import passportLocal from '../auth/local'

router.get(
    '/facebook',
    passportFacebook.authenticate('facebook', {
        scope: ['email', 'user_birthday', 'user_gender', 'public_profile']
    })
)
router.get(
    '/facebook/callback',
    passportFacebook.authenticate('facebook', { session: false }),
    AuthController.logIn
)

router.get(
    '/google',
    passportGoogle.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
)
router.get(
    '/google/callback',
    passportFacebook.authenticate('google', {
        session: false
    }),
    AuthController.logIn
)

router.post('/local', passportLocal.authenticate('local'), AuthController.logIn)

router.post('/register', AuthController.register)

export default router
