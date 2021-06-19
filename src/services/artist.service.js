import Artist from '../models/artist.model'

class ArtistService {
    async getAll({ page = 0, limit = 20, q = '' }) {
        page = Number.parseInt(page)
        limit = Number.parseInt(limit)
        const query = q ? { name: new RegExp(q, 'i') } : {}

        try {
            const artists = await Artist.find(query)
                .skip(page * limit)
                .limit(limit)
                .lean()

            const count = await Artist.find(query).count()

            return { artists, page, limit, count }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getOne(artistId) {
        try {
            return Artist.findById(artistId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async postOne({ name }) {
        const artist = { name }
        try {
            return new Artist({ ...artist }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOne(artistId, { name }) {
        const newArtist = { name } // validation
        try {
            const artist = await Artist.findById(artistId)
            artist.name = name
            return Artist.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOne(artistId) {
        try {
            return Artist.findByIdAndDelete(artistId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async getOneBySlug(artistSlug) {
        console.log(artistSlug)
        try {
            return Artist.findOne({ slug: artistSlug })
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new ArtistService()
