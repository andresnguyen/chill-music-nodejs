const mongoose = require('mongoose')

const songSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        download_url: {
            type: String,
            required: true
        },
        image_path: {
            type: String,
            required: true
        },
        image_path_cover: {
            type: String,
            required: true
        },
        category: {
            type: String,
            default: ''
        },
        singer: {
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
