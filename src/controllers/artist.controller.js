import ArtistService from '../services/artist.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class ArtistController {
    async getAll(req, res, next) {
        try {
            const artists = await ArtistService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: artists })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async getById(req, res, next) {
        const artistId = req.params.id
        try {
            const artist = await ArtistService.getById(artistId)
            return res.status(OK).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async create(req, res, next) {
        try {
            const artist = await ArtistService.create(req.body)
            res.status(OK).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async update(req, res, next) {
        const artistId = req.params.id
        try {
            const artist = await ArtistService.update(artistId, req.body)
            res.status(OK).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async delete(req, res, next) {
        const artistId = req.params.id
        try {
            const artist = await ArtistService.delete(artistId)
            res.status(OK).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }
    async getBySlug(req, res, next) {
        const artistSlug = req.params.slug
        try {
            const song = await ArtistService.getBySlug(artistSlug)
            res.status(OK).json({ ...singleResponse, data: song })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }
}

export default new ArtistController()
