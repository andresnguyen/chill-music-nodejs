import ArtistService from '../services/artist.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'
import AuthService from '../services/auth.service'

class AuthController {
    async logIn(req, res, next) {
        try {
            const token = await AuthService.logIn(req.user)
            res.status(OK).json({
                ...singleResponse,
                data: token,
                user: req.user
            })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async register(req, res, next) {
        try {
            const { user, token } = await AuthService.register(req.body)
            res.status(OK).json({ ...singleResponse, data: token, user })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }
}

export default new AuthController()
