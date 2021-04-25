import AlbumService from '../services/album.service'
import { one, many, failure } from '../constants/response.constant'

class AlbumController {
    async getAll(req, res, next) {
        let { skip, limit } = req.query
        skip = parseInt(skip, 10) || 0
        limit = parseInt(limit, 10) || 10

        try {
            const albums = await AlbumService.getAllAlbum(skip, limit)
            return res.status(200).json({ ...many, data: albums })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async getOne(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getOneAlbum(albumId)
            return res.status(200).json({ ...one, data: album })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const album = { name }
        try {
            const newAlbum = await AlbumService.createOneAlbum(album)
            res.status(200).json({ ...one, data: newAlbum })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async updateOne(req, res, next) {
        const albumId = req.params.id
        const { name } = req.body
        const album = { name }

        try {
            const newAlbum = await AlbumService.updateOneAlbum(albumId, album)
            res.status(200).json({ ...one, data: newAlbum })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async deleteOne(req, res, next) {
        const albumId = req.params.id

        try {
            await AlbumService.deleteOneAlbum(albumId)
            res.status(200).json({ ...one })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }
}

export default new AlbumController()
