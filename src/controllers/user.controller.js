const User = require('../models/user.model');
const SongService = require('../services/song.service');

class UserController {
	async getAll(req, res, next) {}

	async getOne(req, res, next) {
		const userId = req.params.id;
	}

	async postOne(req, res, next) {}

	async updateOne(req, res, next) {
		const userId = req.params.id;
	}

	async deleteOne(req, res, next) {
		const userId = req.params.id;
	}
}

module.exports = new UserController();
