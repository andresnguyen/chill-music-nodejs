import ArtistService from '../services/artist.service'
import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'

class ArtistController {
    async getAll(req, res, next) {
        try {
            const artists = await ArtistService.getAll(req.query)
            return res.status(200).json({ ...pluralResponse, data: artists })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async getOne(req, res, next) {
        const artistId = req.params.id
        try {
            const artist = await ArtistService.getOne(artistId)
            return res.status(200).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async postOne(req, res, next) {
        try {
            const artist = await ArtistService.postOne(req.body)
            res.status(200).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async updateOne(req, res, next) {
        const artistId = req.params.id

        try {
            const artist = await ArtistService.updateOne(artistId, req.body)
            res.status(200).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }

    async deleteOne(req, res, next) {
        const artistId = req.params.id

        try {
            const artist = await ArtistService.deleteOne(artistId)
            res.status(200).json({ ...singleResponse, data: artist })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }
}

export default new ArtistController()
