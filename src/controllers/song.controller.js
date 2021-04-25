import SongService from '../services/song.service'
import { one, many, failure } from '../constants/response.constant'

class SongController {
    async getAll(req, res, next) {
        try {
            const songs = await SongService.getAllSong()
            return res.status(200).json({ ...many, data: songs })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async getOne(req, res, next) {
        const songId = req.params.id
        try {
            const song = await SongService.getOneSong(songId)
            return res.status(200).json({ ...one, data: song })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const song = { name }
        try {
            const newSong = await SongService.createOneSong(song)
            res.status(200).json({ ...one, data: newSong })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async updateOne(req, res, next) {
        const songId = req.params.id
        const { name } = req.body
        const song = { name }

        try {
            const newSong = await SongService.updateOneSong(songId, song)
            console.log({ newSong })
            res.status(200).json({ ...one, data: newSong })
        } catch (error) {
            res.status(500).json({ ...failure, message: error })
        }
    }

    async deleteOne(req, res, next) {
        const songId = req.params.id

        try {
            await SongService.deleteOneSong(songId)
            res.status(200).json({ ...one })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }
}

export default new SongController()
