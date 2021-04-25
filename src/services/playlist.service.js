import Playlist from '../models/playlist.model'

class PlaylistService {
    async getAllPlayList(skip, limit) {
        try {
            return Playlist.find({}).skip(skip).limit(limit).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getOnePlayList(playlistId) {
        try {
            return Playlist.findById(playlistId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createOnePlayList(newPlaylist) {
        try {
            return new PlayList({ ...newPlaylist }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOnePlayList(playlistId, playlistUpdate) {
        try {
            const playlist = await Playlist.findById(playlistId)
            playlist.name = playlistUpdate.name
            return playlist.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOnePlayList(playlistId) {
        try {
            return Playlist.findByIdAndDelete(playlistId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new PlaylistService()
