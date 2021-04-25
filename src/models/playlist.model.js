const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		listSongs: {
			type: Array,
			required: true,
		},
		isActive: {
			type: Number,
			default: 0,
		},
		isDelete: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('playlist', playlistSchema, 'playlists');
