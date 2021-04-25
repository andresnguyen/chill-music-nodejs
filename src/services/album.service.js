import Album from '../models/album.model'

class AlbumService {
    async getOneAlbum(albumId) {
        try {
            return Album.findById(albumId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getAllAlbum() {
        try {
            return Album.find({}).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createOneAlbum(newAlbum) {
        try {
            return new Album({ ...newAlbum }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOneAlbum(albumId, albumUpdate) {
        try {
            const album = await Album.findById(albumId)
            album.name = albumUpdate.name
            return Album.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOneAlbum(albumId) {
        try {
            return Album.findByIdAndDelete(albumId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new AlbumService()
