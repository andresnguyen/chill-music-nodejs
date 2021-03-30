const Album = require('../models/album.model');
const AlbumService = require('../services/album.service');

class AlbumController {
	async getAll(req, res, next) {}

	async getOne(req, res, next) {
		const albumId = req.params.id;
	}

	async postOne(req, res, next) {}

	async patchOne(req, res, next) {
		const albumId = req.params.id;
	}

	async deleteOne(req, res, next) {
		const albumId = req.params.id;
	}
}

module.exports = new AlbumController();
