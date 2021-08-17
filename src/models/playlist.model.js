const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            default: ''
        },
        songIdList: {
            type: Array,
            default: []
        },
        isActive: {
            type: Number,
            default: 0
        },
        isDelete: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('playlist', playlistSchema, 'playlists')
