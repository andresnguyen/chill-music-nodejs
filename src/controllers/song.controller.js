import SongService from '../services/song.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'

class SongController {
    async getAll(req, res, next) {
        try {
            const songs = await SongService.getAll(req.query)
            return res.status(200).json({ ...pluralResponse, data: songs })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async getOne(req, res, next) {
        const songId = req.params.id
        try {
            const song = await SongService.getOne(songId)
            return res.status(200).json({ ...singleResponse, data: song })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async postOne(req, res, next) {
        try {
            const newSong = await SongService.postOne(req.body)
            res.status(200).json({ ...singleResponse, data: newSong })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async updateOne(req, res, next) {
        const songId = req.params.id

        try {
            const song = await SongService.updateOne(songId, req.body)
            res.status(200).json({ ...singleResponse, data: song })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async deleteOne(req, res, next) {
        const songId = req.params.id

        try {
            const song = await SongService.deleteOne(songId)
            res.status(200).json({ ...singleResponse, data: song })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }
}

export default new SongController()
