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
            throw new Error(error.message)
        }
    }

    async getOne(playlistId) {
        try {
            return Playlist.findById(playlistId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async postOne({ name }) {
        const playlist = { name }
        try {
            return new Playlist({ ...playlist }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOne(playlistId, { name }) {
        const newPlaylist = { name } // validation
        try {
            const playlist = await Playlist.findById(playlistId)
            playlist.name = name
            return playlist.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOne(playlistId) {
        try {
            return Playlist.findByIdAndDelete(playlistId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new PlaylistService()
