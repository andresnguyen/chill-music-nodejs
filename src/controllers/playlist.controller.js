import PlaylistService from '../services/playlist.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'
import { OK, INTERNAL_SERVER } from '../constants/httpStatusCode.constant'

class PlaylistController {
    async getAll(req, res, next) {
        try {
            const playlists = await PlaylistService.getAll(req.query)
            return res.status(OK).json({ ...pluralResponse, data: playlists })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async getById(req, res, next) {
        const playlistId = req.params.id
        try {
            const playlist = await PlaylistService.getById(playlistId)
            return res.status(OK).json({ ...singleResponse, data: playlist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async create(req, res, next) {
        try {
            const playlist = await PlaylistService.create(req.body)
            res.status(OK).json({ ...singleResponse, data: playlist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async update(req, res, next) {
        const playlistId = req.params.id
        try {
            const newPlaylist = await PlaylistService.update(
                playlistId,
                req.body
            )
            res.status(OK).json({ ...singleResponse, data: newPlaylist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }

    async delete(req, res, next) {
        const playlistId = req.params.id
        try {
            const playlist = await PlaylistService.delete(playlistId)
            res.status(OK).json({ ...singleResponse, data: playlist })
        } catch (error) {
            res.status(INTERNAL_SERVER).json({
                ...failedResponse,
                message: error.message,
            })
        }
    }
}

export default new PlaylistController()
