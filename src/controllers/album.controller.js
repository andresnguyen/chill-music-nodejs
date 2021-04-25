import AlbumService from '../services/album.service'
class AlbumController {
    async getAll(req, res, next) {
        try {
            const albums = await AlbumService.getAllAlbum()
            return res.status(200).json({ albums })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async getOne(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getOneAlbum(albumId)
            return res.status(200).json({ album })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const album = { name }
        try {
            await AlbumService.createOneAlbum(album)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async updateOne(req, res, next) {
        const albumId = req.params.id
        const { name } = req.body
        const album = { name }

        try {
            await AlbumService.updateOneAlbum(albumId, album)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async deleteOne(req, res, next) {
        const albumId = req.params.id

        try {
            await AlbumService.deleteOneAlbum(albumId)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

export default new AlbumController()
