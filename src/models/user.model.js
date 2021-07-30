const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatarUrl: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        facebook: {
            type: Number,
            default: 0
        },
        gender: {
            type: Number,
            default: 1
        },
        favoriteSongList: {
            type: Array,
            default: 0
        },
        playlistList: {
            type: Array,
            default: 0
        },
        recentSongList: {
            type: Array,
            default: 0
        },
        songUploadList: {
            type: Array,
            default: 0
        },
        followingArtistList: {
            type: Array,
            default: 0
        },
        role: {
            type: Number,
            default: 0
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

export default mongoose.model('user', userSchema, 'users')
