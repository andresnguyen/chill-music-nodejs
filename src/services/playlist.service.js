const Playlist = require('../models/playlist.model');

class PlaylistService {
	async getOnePlayList(playlistId) {
		try {
			return Playlist.findById(playlistId);
		} catch (error) {
			throw new Error(error);
		}
	}

	async getAllPlayList() {
		try {
			return Playlist.find({});
		} catch (error) {
			throw new Error(error);
		}
	}

	async createOnePlayList(newPlaylist) {
		try {
			return new PlayList({ ...newPlaylist }).save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateOnePlayList(playlistId, playlistUpdate) {
		try {
			const playlist = await Playlist.findById(playlistId);
			playlist.name = playlistUpdate.name;
			return playlist.save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async deleteOnePlayList(playlistId) {
		try {
			return Playlist.findByIdAndDelete(playlistId);
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = new PlaylistService();
