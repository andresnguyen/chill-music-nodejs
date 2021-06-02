import Song from '../models/song.model'

class SongService {
    async getAll({ page = 0, limit = 20, q = '' }) {
        page = Number.parseInt(page)
        limit = Number.parseInt(limit)
        const query = q ? { name: new RegExp(q, 'i') } : {}

        try {
            const songs = await Song.find(query)
                .skip(page * limit)
                .limit(limit)
                .lean()

            const count = await Song.find(query).count()

            return { songs, page, limit, count }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getOne(songId) {
        try {
            return Song.findById(songId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async postOne({ name }) {
        const song = { name }
        try {
            return new Song({ ...song }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOne(songId, { name }) {
        const newSong = { name } // validation
        try {
            const song = await Song.findById(songId)
            song.name = name
            return song.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOne(songId) {
        try {
            return Song.findByIdAndDelete(songId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new SongService()
