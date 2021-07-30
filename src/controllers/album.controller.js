import AlbumService from '../services/album.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class AlbumController {
    async getAll(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async getById(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getById(albumId)
            return res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async create(req, res, next) {
        try {
            const album = await AlbumService.create(req.body)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async update(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async delete(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.findByIdAndDelete(albumId)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }
}

export default new AlbumController()
