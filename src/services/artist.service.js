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
            throw new Error(error)
        }
    }

    async getById(artistId) {
        try {
            const artist = await Artist.findById(artistId).lean()
            return artist
        } catch (error) {
            throw new Error(error)
        }
    }

    async create(newArtist) {
        try {
            const artist = await new Artist({ ...newArtist }).save()
            return artist
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(artistId, updateArtist) {
        try {
            const artist = await Artist.findById(artistId)
            return await artist.save()
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(artistId) {
        try {
            const artist = await Artist.findByIdAndDelete(artistId)
            return artist
        } catch (error) {
            throw new Error(error)
        }
    }

    async getBySlug(artistSlug) {
        try {
            const artist = await Artist.findOne({ slug: artistSlug })
            return artist
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new ArtistService()
