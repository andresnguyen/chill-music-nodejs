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

            const count = await Song.find(query).count()
            return { songs, page, limit, count }
        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(songId) {
        try {
            const song = await Song.findById(songId)
            return song
        } catch (error) {
            throw new Error(error)
        }
    }

    async create(newSong) {
        try {
            const song = await new Song({ ...newSong }).save()
            return song
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(songId, updateSong) {
        try {
            const song = await Song.findById(songId)
            return await song.save()
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(songId) {
        try {
            const song = await Song.findByIdAndDelete(songId)
            return song
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteSoft(songId) {
        try {
            const song = await Song.findByIdAndDelete(songId)
            song.isDelete = 1
            return await song.save()
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new SongService()
