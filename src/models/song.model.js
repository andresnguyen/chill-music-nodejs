const mongoose = require('mongoose')

const songSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        genreList: {
            type: Array,
            required: true
        },
        artistList: {
            type: Array,
            required: true
        },
        view: {
            type: Number,
            min: 0,
            default: 0
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

export default mongoose.model('Song', songSchema, 'songs')
