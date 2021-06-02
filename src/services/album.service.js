import Album from '../models/album.model'

class AlbumService {
    async getAll({ page = 0, limit = 20, q = '' }) {
        page = Number.parseInt(page)
        limit = Number.parseInt(limit)
        const query = q ? { name: new RegExp(q, 'i') } : {}

        try {
            const albums = await Album.find(query)
                .skip(page * limit)
                .limit(limit)
                .lean()

            const count = await Album.find(query).count()

            return { albums, page, limit, count }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getOne(albumId) {
        try {
            return Album.findById(albumId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async postOne({ name }) {
        const album = { name }
        try {
            return new Album({ ...album }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOne(albumId, { name }) {
        const newAlbum = { name } // validation
        try {
            const album = await Album.findById(albumId)
            album.name = name
            return Album.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOne(albumId) {
        try {
            return Album.findByIdAndDelete(albumId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new AlbumService()
