const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: true,
		},
		banner: {
			type: String,
			required: true,
		},
		genre: {
			type: Array,
			required: true,
		},
		description: {
			type: String,
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

export default mongoose.model('artist', artistSchema, 'artists');
