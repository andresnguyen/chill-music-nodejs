const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String
            // required: true
        },
        password: {
            type: String
            // required: true
        },
        avatarUrl: {
            type: String
            // required: true
        },
        dateOfBirth: {
            type: Date
            // required: true
        },
        facebookId: {
            type: String,
            default: ''
        },
        googleId: {
            type: String,
            default: ''
        },
        gender: {
            type: String,
            default: 'male'
        },
        favoriteSongIdList: {
            type: Array,
            default: []
        },
        playlistIdList: {
            type: Array,
            default: []
        },
        recentSongIdList: {
            type: Array,
            default: []
        },
        songUploadIdList: {
            type: Array,
            default: []
        },
        followingArtistIdList: {
            type: Array,
            default: []
        },
        role: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Number,
            default: 1
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
