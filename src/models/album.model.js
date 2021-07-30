const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        songList: {
            type: Array,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        artistList: {
            type: Array,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        },
        isDelete: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('album', albumSchema, 'albums')
