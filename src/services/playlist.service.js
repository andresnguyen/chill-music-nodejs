import Playlist from '../models/playlist.model'

class PlaylistService {
    async getAll({ page = 0, limit = 20, q = '' }) {
        page = Number.parseInt(page)
        limit = Number.parseInt(limit)
        const query = q ? { name: new RegExp(q, 'i') } : {}
        try {
            const playlists = await Playlist.find(query)
                .skip(page * limit)
                .limit(limit)
                .lean()
            const count = await Playlist.find(query).count()
            return { playlists, page, limit, count }
        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(playlistId) {
        try {
            const playlist = await Playlist.findById(playlistId).lean()
            return playlist
        } catch (error) {
            throw new Error(error)
        }
    }

    async create(newPlaylist) {
        try {
            const playlist = await new Playlist({ ...newPlaylist }).save()
            return playlist
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(playlistId, updatePlaylist) {
        try {
            const playlist = await Playlist.findById(playlistId)
            return await playlist.save()
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(playlistId) {
        try {
            const playlist = await Playlist.findByIdAndDelete(playlistId)
            return playlist
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new PlaylistService()
