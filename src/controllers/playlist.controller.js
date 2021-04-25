import PlaylistService from '../services/playlist.service'
import { one, many, failure } from '../constants/response.constant'

class PlaylistController {
    async getAll(req, res, next) {
        try {
            const playlists = await PlaylistService.getAllPlaylist()
            return res.status(200).json({ ...many, data: playlists })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async getOne(req, res, next) {
        const playlistId = req.params.id
        try {
            const playlist = await PlaylistService.getOnePlaylist(playlistId)
            return res.status(200).json({ ...one, data: playlist })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const playlist = { name }
        try {
            const newPlaylist = await PlaylistService.createOnePlaylist(
                playlist
            )
            res.status(200).json({ ...one, data: newPlaylist })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async updateOne(req, res, next) {
        const playlistId = req.params.id
        const { name } = req.body
        const playlist = { name }

        try {
            const newPlaylist = await PlaylistService.updateOnePlaylist(
                playlistId,
                playlist
            )
            res.status(200).json({ ...one, data: newPlaylist })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async deleteOne(req, res, next) {
        const playlistId = req.params.id

        try {
            await PlaylistService.deleteOnePlaylist(playlistId)
            res.status(200).json({ ...one })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }
}

export default new PlaylistController()
