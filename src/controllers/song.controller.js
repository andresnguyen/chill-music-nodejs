const Song = require('../models/song.model');
const SongService = require('../services/song.service');

class SongController {
	async getAll(req, res, next) {
		try {
			const songs = await SongService.getAllSong();
			return res.status(200).json({ songs });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async getOne(req, res, next) {
		const songId = req.params.id;
		try {
			const song = await SongService.getOneSong(songId);
			return res.status(200).json({ song });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async postOne(req, res, next) {
		const { name } = req.body;
		const song = { name };
		try {
			await SongService.createOneSong(song);
			res.status(200).json({ flag: true });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async updateOne(req, res, next) {
		const songId = req.params.id;
		const { name } = req.body;
		const song = { name };

		try {
			await SongService.updateOneSong(songId, song);
			res.status(200).json({ flag: true });
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	async deleteOne(req, res, next) {
		const songId = req.params.id;

		try {
			await SongService.deleteOneSong(songId);
			res.status(200).json({ flag: true });
		} catch (error) {
			res.status(500).json({ error });
		}
	}
}

module.exports = new SongController();
