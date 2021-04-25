import Playlist from '../models/playlist.model'
import PlaylistService from '../services/playlist.service'

class PlaylistController {
    async getAll(req, res, next) {
        try {
            const playlists = await PlaylistService.getAllPlaylist()
            return res.status(200).json({ playlists })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async getOne(req, res, next) {
        const playlistId = req.params.id
        try {
            const playlist = await PlaylistService.getOnePlaylist(playlistId)
            return res.status(200).json({ playlist })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const playlist = { name }
        try {
            await PlaylistService.createOnePlaylist(playlist)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async updateOne(req, res, next) {
        const playlistId = req.params.id
        const { name } = req.body
        const playlist = { name }

        try {
            await PlaylistService.updateOnePlaylist(playlistId, playlist)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async deleteOne(req, res, next) {
        const playlistId = req.params.id

        try {
            await PlaylistService.deleteOnePlaylist(playlistId)
            res.status(200).json({ flag: true })
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

export default new PlaylistController()
