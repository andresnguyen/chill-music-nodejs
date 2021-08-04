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
        favoriteSongIdList: {
            type: Array,
            default: 0
        },
        playlistIdList: {
            type: Array,
            default: 0
        },
        recentSongIdList: {
            type: Array,
            default: 0
        },
        songUploadIdList: {
            type: Array,
            default: 0
        },
        followingArtistIdList: {
            type: Array
        },
        role: {
            type: Number,
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

export default mongoose.model('user', userSchema, 'users')
