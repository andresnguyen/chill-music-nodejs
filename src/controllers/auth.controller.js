import ArtistService from '../services/artist.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class AuthController {
    async logIn(req, res, next) {
        res.status(OK).json({ ...singleResponse, data: req.user })
    }
}

export default new AuthController()
