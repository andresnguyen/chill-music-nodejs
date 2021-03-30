const Song = require('../models/song.model');
const SongService = require('../services/song.service');

class SongController {
	async getAll(req, res, next) {
		const songs = await SongService.getAllSong();
		return res.status(200).json({ songs });
	}

	async getOne(req, res, next) {
		const songId = req.params.id;

		const song = await SongService.getOneSong(songId);
		return res.status(200).json({ song });
	}

	async postOne(req, res, next) {}

	async updateOne(req, res, next) {
		const songId = req.params.id;
	}

	async deleteOne(req, res, next) {
		const songId = req.params.id;
	}
}

module.exports = new SongController();
