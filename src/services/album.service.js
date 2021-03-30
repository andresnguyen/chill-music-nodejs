const Album = require('../models/album.model');

class AlbumService {
	async getOneAlbum(albumId) {
		try {
			return Album.findById(albumId);
		} catch (error) {
			throw new Error(error);
		}
	}

	async getAllAlbum() {
		try {
			return Album.find({});
		} catch (error) {
			throw new Error(error);
		}
	}

	async createOneAlbum(newAlbum) {
		try {
			return new Album({ ...newAlbum }).save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateOneAlbum(albumId, albumUpdate) {
		try {
			const album = await Album.findById(albumId);
			album.name = albumUpdate.name;
			return Album.save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async deleteOneAlbum(albumId) {
		try {
			return Album.findByIdAndDelete(albumId);
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = new AlbumService();
