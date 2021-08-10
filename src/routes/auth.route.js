import express from 'express'
const router = express.Router()
import AuthController from '../controllers/auth.controller'
import passportFacebook from '../authentication/facebook'
import passportGoogle from '../authentication/google'
import passportLocal from '../authentication/local'

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
        scope: 'https://www.googleapis.com/auth/plus.login'
    })
)
router.get(
    '/google/callback',
    passportFacebook.authenticate('google', {
        session: false
    }),
    AuthController.logIn
)

router.get(
    '/local',
    passportLocal.authenticate('local', {
        session: false
    }),
    AuthController.logIn
)

export default router
