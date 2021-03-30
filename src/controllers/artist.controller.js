const Artist = require('../models/artist.model');
const ArtistService = require('../services/artist.service');

class ArtistController {
	async getAll(req, res, next) {}

	async getOne(req, res, next) {
		const artistId = req.params.id;
	}

	async postOne(req, res, next) {}

	async patchOne(req, res, next) {
		const artistId = req.params.id;
	}

	async deleteOne(req, res, next) {
		const artistId = req.params.id;
	}
}

module.exports = new ArtistController();
