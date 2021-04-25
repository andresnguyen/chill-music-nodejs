const mongoose = require('mongoose')

const songSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            // required: true,
        },
        image: {
            type: String,
            // required: true,
        },
        genre: {
            type: Array,
            // required: true,
        },
        artists: {
            type: Array,
            // required: true,
        },
        view: {
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
)

export default mongoose.model('Song', songSchema, 'songs')
