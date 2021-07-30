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
            throw new Error(error)
        }
    }

    async getById(albumId) {
        try {
            const album = await Album.findById(albumId).lean()
            return album
        } catch (error) {
            throw new Error(error)
        }
    }

    async create(newAlbum) {
        try {
            const album = await new Album({ ...newAlbum }).save()
            return album
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(albumId, updateAlbum) {
        try {
            const album = await Album.findById(albumId)
            return await album.save()
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(albumId) {
        try {
            const album = await Album.findByIdAndDelete(albumId)
            return album
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteSoft(albumId) {
        try {
            const album = await Album.findByIdAndDelete(albumId)
            album.isDelete = 1
            await album.save()
            return album
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new AlbumService()
