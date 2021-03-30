const Artist = require('../models/artist.model');
const ArtistService = require('../services/artist.service');

class ArtistController {
	async getAll(req, res, next) {
		try {
			const artists = await ArtistService.getAllArtist();
			return res.status(200).json({ artists });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async getOne(req, res, next) {
		const artistId = req.params.id;
		try {
			const artist = await ArtistService.getOneArtist(artistId);
			return res.status(200).json({ artist });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async postOne(req, res, next) {
		const { name } = req.body;
		const artist = { name };
		try {
			await ArtistService.createOneArtist(artist);
			res.status(200).json({ flag: true });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async updateOne(req, res, next) {
		const artistId = req.params.id;
		const { name } = req.body;
		const artist = { name };

		try {
			await ArtistService.updateOneArtist(artistId, artist);
			res.status(200).json({ flag: true });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async deleteOne(req, res, next) {
		const artistId = req.params.id;

		try {
			await ArtistService.deleteOneArtist(artistId);
			res.status(200).json({ flag: true });
		} catch (error) {
			res.status(500).json({ error });
		}
	}
}

module.exports = new ArtistController();
