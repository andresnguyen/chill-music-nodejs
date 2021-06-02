import PlaylistService from '../services/playlist.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'

class PlaylistController {
    async getAll(req, res, next) {
        try {
            const playlists = await PlaylistService.getAll(req.query)
            return res.status(200).json({ ...pluralResponse, data: playlists })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async getOne(req, res, next) {
        const playlistId = req.params.id
        try {
            const playlist = await PlaylistService.getOne(playlistId)
            return res.status(200).json({ ...singleResponse, data: playlist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        try {
            const playlist = await PlaylistService.postOne(req.body)
            res.status(200).json({ ...singleResponse, data: playlist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async updateOne(req, res, next) {
        const playlistId = req.params.id

        try {
            const newPlaylist = await PlaylistService.updateOne(
                playlistId,
                req.body
            )
            res.status(200).json({ ...singleResponse, data: newPlaylist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async deleteOne(req, res, next) {
        const playlistId = req.params.id

        try {
            const playlist = await PlaylistService.deleteOne(playlistId)
            res.status(200).json({ ...singleResponse, data: playlist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }
}

export default new PlaylistController()
