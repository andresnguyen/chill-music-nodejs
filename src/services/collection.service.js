import Album from '../models/album.model'
import User from '../models/user.model'
import Artist from '../models/artist.model'
import Playlist from '../models/playlist.model'

class CollectionService {
    // FAVORITE SONG===========================================

    async getFavoriteSongList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async createFavoriteSong(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getById(albumId)
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteFavoriteSong(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.findByIdAndDelete(albumId)
        } catch (error) {
            throw new Error(error)
        }
    }

    // PLAYLIST============================================

    async getPlaylistList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getPlaylistById(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async createPlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.getById(albumId)
        } catch (error) {
            throw new Error(error)
        }
    }

    async updatePlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
        } catch (error) {
            throw new Error(error)
        }
    }

    async deletePlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.findByIdAndDelete(albumId)
        } catch (error) {
            throw new Error(error)
        }
    }

    async addSongToPlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteSongFromPlaylist(req, res, next) {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
        } catch (error) {
            throw new Error(error)
        }
    }

    // ALBUMS=============================================

    async getAlbumList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAlbumById(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async addAlbumToCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAlbumFromCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    // ARTIST==============================================

    async getArtistList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async addArtistToCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteArtistFromCollection(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    // MY SONG===============================================

    async getMySongList(req, res, next) {
        try {
            const albums = await AlbumService.getAll(req.query)
        } catch (error) {
            throw new Error(error)
        }
    }

    async createMySong(req, res, next) {
        try {
            const album = await AlbumService.create(req.body)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new CollectionService()
