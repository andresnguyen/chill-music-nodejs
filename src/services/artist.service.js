const Artist = require('../models/artist.model');

class ArtistService {
	async getOneArtist(artistId) {
		try {
			return Artist.findById(artistId);
		} catch (error) {
			throw new Error(error);
		}
	}

	async getAllArtist() {
		try {
			return Artist.find({});
		} catch (error) {
			throw new Error(error);
		}
	}

	async createOneArtist(newArtist) {
		try {
			return new Artist({ ...newArtist }).save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateOneArtist(artistId, artistUpdate) {
		try {
			const artist = await Artist.findById(artistId);
			artist.name = artistUpdate.name;
			return Artist.save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async deleteOneArtist(artistId) {
		try {
			return Artist.findByIdAndDelete(artistId);
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = new ArtistService();
