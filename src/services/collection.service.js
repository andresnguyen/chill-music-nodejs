import Album from '../models/album.model'
import User from '../models/user.model'
import Artist from '../models/artist.model'
import Playlist from '../models/playlist.model'
import Song from '../models/song.model'
import fileUploader from '../configs/cloudinary.config'

class CollectionService {
    // FAVORITE SONG===========================================

    async getFavoriteSongIdList(userId) {
        try {
            const user = await User.getById(userId)
            const favoriteSongIdList = await Song.find({
                _id: { $in: user.favoriteSongIdList }
            })
            return favoriteSongIdList
        } catch (error) {
            throw new Error(error)
        }
    }

    async createFavoriteSong(userId, songId) {
        try {
            const user = await User.getById(userId)
            user.favoriteSongIdList.unshift(songId)
            await user.save()
            return songId
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteFavoriteSong(userId, songId) {
        try {
            const user = await User.getById(userId)
            user.favoriteSongIdList = user.favoriteSongIdList.filter(
                (favoriteSongId) => favoriteSongId !== songId
            )
            await user.save()
            return songId
        } catch (error) {
            throw new Error(error)
        }
    }

    // PLAYLIST============================================

    async getPlaylistList(userId) {
        try {
            const user = await User.findById(userId)
            const playlistList = await Playlist.find({
                _id: { $in: user.playlistIdList }
            })
            return playlistList
        } catch (error) {
            throw new Error(error)
        }
    }

    async getPlaylistById(playlistId) {
        try {
            const playlist = await Playlist.getById(playlistId)
            return playlist
        } catch (error) {
            throw new Error(error)
        }
    }

    async createPlaylist(userId, playlist) {
        try {
            const user = await User.findById(userId)
            const playlist = await new Playlist({ name: playlist.name })
            user.playlistIdList.unshift(playlist._id)
            return playlist
        } catch (error) {
            throw new Error(error)
        }
    }

    async updatePlaylist() {
        const albumId = req.params.id
        try {
            const album = await AlbumService.update(albumId, req.body)
        } catch (error) {
            throw new Error(error)
        }
    }

    async deletePlaylist(userId, playlistId) {
        try {
            const user = await User.getById(userId)
            user.playlistIdList = user.playlistIdList.filter(
                (playlistIdItem) => playlistIdItem !== playlistId
            )
            await user.save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    async addSongToPlaylist(userId, playlistId, songId) {
        try {
            const playlist = await Playlist.findById(playlistId)
            playlist.songIdList.unshift(songId)
            await playlist.save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteSongFromPlaylist(userId, playlistId, songId) {
        try {
            const playlist = await Playlist.getById(playlistId)
            playlist.songIdList = playlist.songIdList.filter(
                (songIdItem) => songIdItem !== songId
            )
            await playlist.save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    // ALBUMS=============================================

    async getAlbumList(userId) {
        try {
            const user = await User.findById(userId)
            const albumList = await Album.find({
                _id: { $in: user.albumIdList }
            })
            return albumList
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAlbumById(userId, albumId) {
        try {
            const album = await Album.getById(albumId)
            return album
        } catch (error) {
            throw new Error(error)
        }
    }

    async addAlbumToCollection(userId, albumId) {
        try {
            const user = await User.findById(userId)
            user.albumIdList.unshift(albumId)
            await user.save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAlbumFromCollection(userId, albumId) {
        try {
            const user = await User.findById(userId)
            user.albumIdList = user.albumIdList.filter(
                (albumIdItem) => albumIdItem !== userId
            )
            await user.save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    // ARTIST==============================================

    async getArtistList(userId) {
        try {
            const user = await User.getById(userId)
            const artistList = await Artist.find({
                _id: { $in: user.artistIdList }
            })
            return artistList
        } catch (error) {
            throw new Error(error)
        }
    }

    async addArtistToCollection(userId, artistId) {
        try {
            const user = await User.getById(userId)
            user.artistIdList.unshift(artistId)
            await user.save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteArtistFromCollection(userId, artistId) {
        try {
            const user = await User.getById(userId)
            user.artistIdList = user.artistIdList.filter(
                (artistIdItem) => artistIdItem !== artistId
            )
            await user.save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    // MY SONG===============================================

    async getMySongList(userId) {
        try {
            const user = await User.getById(userId)
            const songUploadList = await Song.find({
                _id: { $in: user.songUploadIdList }
            })
            return songUploadList
        } catch (error) {
            throw new Error(error)
        }
    }

    async createMySong(userId, req) {
        try {
            if (!req.file) throw new Error('No file uploaded')
            return req.file
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new CollectionService()
