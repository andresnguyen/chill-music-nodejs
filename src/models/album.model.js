const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        listAlbums: {
            type: Array,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        artists: {
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
)

export default mongoose.model('album', albumSchema, 'albums')
