import ArtistService from '../services/artist.service'
import { one, many, failure } from '../constants/response.constant'

class ArtistController {
    async getAll(req, res, next) {
        try {
            const artists = await ArtistService.getAllArtist()
            return res.status(200).json({ ...many, data: artists })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async getOne(req, res, next) {
        const artistId = req.params.id
        try {
            const artist = await ArtistService.getOneArtist(artistId)
            return res.status(200).json({ ...one, data: artist })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const artist = { name }
        try {
            const newArtist = await ArtistService.createOneArtist(artist)
            res.status(200).json({ ...one, data: newArtist })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async updateOne(req, res, next) {
        const artistId = req.params.id
        const { name } = req.body
        const artist = { name }

        try {
            const newArtist = await ArtistService.updateOneArtist(
                artistId,
                artist
            )
            res.status(200).json({ ...one, data: newArtist })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async deleteOne(req, res, next) {
        const artistId = req.params.id

        try {
            await ArtistService.deleteOneArtist(artistId)
            res.status(200).json({ ...one })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }
}

export default new ArtistController()
