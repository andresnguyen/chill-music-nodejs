import Song from '../models/song.model'
import createError from 'http-errors'

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

    async create(data) {
        try {
            let {
                body: { name, singer, category },
                files
            } = data

            const newSong = {
                name,
                singer,
                category,
                download_url: files[0].path,
                image_path: files[1].path,
                image_path_cover: files[2].path
            }
            const song = await new Song({ ...newSong }).save()
            return song
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(songId, updateSong) {
        try {
            const song = await Song.findByIdAndUpdate(songId, updateSong, {
                new: true
            })
            return song
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
            const song = await Song.findById(songId)
            if (!song) throw new createError.BadRequest(`Song doesn't exist`)
            song.isDelete = 1
            return await song.save()
        } catch (error) {
            throw error
        }
    }
}

export default new SongService()
