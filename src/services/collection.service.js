import Album from '../models/album.model'
import User from '../models/user.model'
import Artist from '../models/artist.model'
import Playlist from '../models/playlist.model'
import Song from '../models/song.model'
import createError from 'http-errors'

class CollectionService {
    // FAVORITE SONG===========================================

    async getFavoriteSongList(userId) {
        try {
            const user = await User.findById(userId)
            const favoriteSongList = await Song.find({
                _id: { $in: user.favoriteSongIdList }
            })
            return favoriteSongList
        } catch (error) {
            throw error
        }
    }

    async createFavoriteSong(userId, songId) {
        try {
            const user = await User.findById(userId)
            if (user.favoriteSongIdList.includes(songId))
                throw new createError.BadRequest(
                    'This song exists in your favorite song list'
                )
            user.favoriteSongIdList.unshift(songId)
            await user.save()
            return true
        } catch (error) {
            throw error
        }
    }

    async deleteFavoriteSong(userId, songId) {
        try {
            const user = await User.findById(userId)
            if (!user.favoriteSongIdList.includes(songId))
                throw new createError.BadRequest(
                    'This song does not exist in your favorite song list'
                )
            user.favoriteSongIdList = user.favoriteSongIdList.filter(
                (favoriteSongId) => favoriteSongId !== songId
            )
            await user.save()
            return true
        } catch (error) {
            throw error
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
            throw error
        }
    }

    async getPlaylistById(playlistId) {
        try {
            const playlist = await Playlist.findById(playlistId)
            return playlist
        } catch (error) {
            throw error
        }
    }

    async createPlaylist(userId, newPlaylist) {
        try {
            const user = await User.findById(userId)
            const playlist = await new Playlist({ ...newPlaylist }).save()
            user.playlistIdList.unshift(playlist._id)
            await user.save()
            return playlist
        } catch (error) {
            throw error
        }
    }

    async updatePlaylist(playlistId, updatePlaylist) {
        try {
            const playlist = await Playlist.findByIdAndUpdate(
                playlistId,
                updatePlaylist,
                {
                    new: true
                }
            )
            return playlist
        } catch (error) {
            throw error
        }
    }

    async deletePlaylist(userId, playlistId) {
        try {
            const user = await User.findById(userId)
            if (!user.playlistIdList.includes(playlistId))
                throw new createError.BadRequest(
                    `Playlist not exists in current user's playlist`
                )
            user.playlistIdList = user.playlistIdList.filter(
                (playlistIdItem) => playlistIdItem !== playlistId
            )
            await user.save()
            await Playlist.findByIdAndUpdate(playlistId, { isDelete: 1 })
            return true
        } catch (error) {
            throw error
        }
    }

    async addSongToPlaylist(userId, playlistId, songId) {
        try {
            const playlist = await Playlist.findById(playlistId)
            if (playlist.songIdList.includes(songId))
                throw new createError.BadRequest(
                    'This song exists in the playlist'
                )
            playlist.songIdList.unshift(songId)
            await playlist.save()
            return true
        } catch (error) {
            throw error
        }
    }

    async deleteSongFromPlaylist(userId, playlistId, songId) {
        try {
            const playlist = await Playlist.findById(playlistId)
            if (!playlist.songIdList.includes(songId))
                throw new createError.BadRequest(
                    'This song does not exist in the playlist'
                )
            playlist.songIdList = playlist.songIdList.filter(
                (songIdItem) => songIdItem !== songId
            )
            await playlist.save()
            return true
        } catch (error) {
            throw error
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
            throw error
        }
    }

    async getAlbumById(userId, albumId) {
        try {
            const album = await Album.findById(albumId)
            return album
        } catch (error) {
            throw error
        }
    }

    async addAlbumToCollection(userId, albumId) {
        try {
            const user = await User.findById(userId)
            if (user.albumIdList.includes(albumId))
                throw new createError.BadRequest(
                    'This album exists in your album list'
                )
            user.albumIdList.unshift(albumId)
            await user.save()
            return true
        } catch (error) {
            throw error
        }
    }

    async deleteAlbumFromCollection(userId, albumId) {
        try {
            const user = await User.findById(userId)
            if (!user.albumIdList.includes(albumId))
                throw new createError.BadRequest(
                    'This album does not exist in your album list'
                )
            user.albumIdList = user.albumIdList.filter(
                (albumIdItem) => albumIdItem !== userId
            )
            await user.save()
            return true
        } catch (error) {
            throw error
        }
    }

    // ARTIST==============================================

    async getArtistList(userId) {
        try {
            const user = await User.findById(userId)
            const artistList = await Artist.find({
                _id: { $in: user.followingArtistIdList }
            })
            return artistList
        } catch (error) {
            throw error
        }
    }

    async addArtistToCollection(userId, artistId) {
        try {
            const user = await User.findById(userId)
            user.followingArtistIdList.unshift(artistId)
            await user.save()
            return true
        } catch (error) {
            throw error
        }
    }

    async deleteArtistFromCollection(userId, artistId) {
        try {
            const user = await User.findById(userId)
            user.followingArtistIdList = user.followingArtistIdList.filter(
                (followingArtistId) => followingArtistId !== artistId
            )
            await user.save()
            return true
        } catch (error) {
            throw error
        }
    }

    // MY SONG===============================================

    async getMySongList(userId) {
        try {
            const user = await User.findById(userId)
            const songUploadList = await Song.find({
                _id: { $in: user.songUploadIdList }
            })
            return songUploadList
        } catch (error) {
            throw error
        }
    }

    async createMySong(userId, req) {
        try {
            if (!req.file) throw new createError.BadRequest('No file uploaded')
            const user = await User.findById(userId)
            const song = await new Song({
                name: req.file.originalname,
                download_url: req.file.path,
                image_path: user.avatarUrl || 'null',
                singer: [user._id]
            }).save()
            user.songUploadIdList.unshift(song._id)
            user.save()
            return song
        } catch (error) {
            throw error
        }
    }

    async deleteMySong(userId, songId) {
        try {
            const user = await User.findById(userId)
            user.songUploadIdList = user.songUploadIdList.filter(
                (songIdItem) => songIdItem !== songId
            )
            await user.save()
            return true
        } catch (error) {
            throw error
        }
    }
}

export default new CollectionService()
