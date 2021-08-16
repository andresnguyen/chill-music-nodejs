const mongoose = require('mongoose')
import { encodePassword } from '../utils/auth'

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
            type: String,
            select: false
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
            type: String
        },
        googleId: {
            type: String
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

userSchema.pre('save', async function hashPassword(next) {
    try {
        const user = this
        if (user.isModified('password')) {
            user.password = await encodePassword(user.password)
        }
        next()
    } catch (error) {
        next(error)
    }
})

export default mongoose.model('user', userSchema, 'users')
