const Song = require('../models/song.model');
const SongService = require('../services/song.service');

class SongController {
	async getAll(req, res, next) {}

	async getOne(req, res, next) {
		const songId = req.params.id;
	}

	async postOne(req, res, next) {}

	async patchOne(req, res, next) {
		const songId = req.params.id;
	}

	async deleteOne(req, res, next) {
		const songId = req.params.id;
	}
}

module.exports = new SongController();
