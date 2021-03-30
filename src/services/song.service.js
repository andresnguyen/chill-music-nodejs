const Song = require('../models/song.model');

class SongService {
	async getOneSong(songId) {
		return Song.findById(songId);
	}

	async getAllSong() {
		return Song.find({});
	}

	async postOneSong(song) {
		return new Song({ ...song }).save();
	}

	async updateOneSong(songId, songUpdate) {
		const song = await Song.findById(songId);
		song.name = songUpdate.name;
		return song.save();
	}

	async deleteOneSong(songId) {
		Song.findByIdAndDelete(songId);
	}
}

module.exports = new SongService();
