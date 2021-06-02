import AlbumService from '../services/album.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'

class AlbumController {
    async getAll(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(200).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async getOne(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getOne(albumId)
            return res.status(200).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async postOne(req, res, next) {
        try {
            const album = await AlbumService.postOne(req.body)
            res.status(200).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async updateOne(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.updateOne(albumId, req.body)
            res.status(200).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async deleteOne(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.deleteOne(albumId)
            res.status(200).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }
}

export default new AlbumController()
