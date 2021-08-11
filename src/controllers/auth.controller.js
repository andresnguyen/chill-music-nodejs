import ArtistService from '../services/artist.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'
import { AuthService } from '../services/auth.service'

class AuthController {
    async logIn(req, res, next) {
        try {
            res.status(OK).json({ ...singleResponse, data: req.user })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async register(req, res, next) {
        try {
            const user = await AuthService.register(req.body)
            res.status(OK).json({ ...singleResponse, data: user })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }
}

export default new AuthController()
