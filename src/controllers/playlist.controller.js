const Playlist = require('../models/playlist.model');
const PlaylistService = require('../services/playlist.service');

class PlaylistController {
	async getAll(req, res, next) {}

	async getOne(req, res, next) {
		const playlistId = req.params.id;
	}

	async postOne(req, res, next) {}

	async updateOne(req, res, next) {
		const playlistId = req.params.id;
	}

	async deleteOne(req, res, next) {
		const playlistId = req.params.id;
	}
}

module.exports = new PlaylistController();
