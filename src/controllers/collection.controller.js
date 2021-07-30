import AlbumService from '../services/album.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class CollectionController {
    // FAVORITE SONG===========================================

    async getFavoriteSongList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async createFavoriteSong(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getById(albumId)
            return res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async deleteFavoriteSong(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.findByIdAndDelete(albumId)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    // PLAYLIST============================================

    async getPlaylistList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async getPlaylistById(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async createPlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getById(albumId)
            return res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async updatePlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async deletePlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.findByIdAndDelete(albumId)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async addSongToPlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async deleteSongFromPlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    // ALBUMS=============================================

    async getAlbumList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async getAlbumById(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async addAlbumToCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async deleteAlbumFromCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    // ARTIST==============================================

    async getArtistList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async addArtistToCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async deleteArtistFromCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    // MY SONG===============================================

    async getMySongList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: albums })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async createMySong(req, res, next) {
        try {
            const album = await AlbumService.create(req.body)
            res.status(OK).json({ ...singleResponse, data: album })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }
}

export default new CollectionController()
