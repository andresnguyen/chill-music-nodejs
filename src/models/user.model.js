const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		fullname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: true,
		},
		dateOfBirth: {
			type: Date,
			required: true,
		},
		facebook: {
			type: Number,
			default: 0,
		},
		gender: {
			type: Number,
			default: 0,
		},
		listFavoriteSongs: {
			type: Array,
			default: 0,
		},
		listPlaylists: {
			type: Array,
			default: 0,
		},
		listRecentSongs: {
			type: Array,
			default: 0,
		},
		listSongsUpload: {
			type: Array,
			default: 0,
		},
		listFollowingArtists: {
			type: Array,
			default: 0,
		},
		role: {
			type: Number,
			default: 0,
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

export default mongoose.model('user', userSchema, 'users');
