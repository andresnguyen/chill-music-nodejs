import SongService from '../services/song.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class SongController {
    async getAll(req, res, next) {
        try {
            const songs = await SongService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: songs })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async getById(req, res, next) {
        const songId = req.params.id
        try {
            const song = await SongService.getById(songId)
            return res.status(OK).json({ ...singleResponse, data: song })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async create(req, res, next) {
        try {
            const newSong = await SongService.create(req)
            res.status(OK).json({ ...singleResponse, data: newSong })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async update(req, res, next) {
        const songId = req.params.id
        try {
            const song = await SongService.update(songId, req.body)
            res.status(OK).json({ ...singleResponse, data: song })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }

    async delete(req, res, next) {
        const songId = req.params.id
        try {
            const song = await SongService.deleteSoft(songId)
            res.status(OK).json({ ...singleResponse, data: song })
        } catch (error) {
            res.status(error.statusCode || INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message
            })
        }
    }
}

export default new SongController()
