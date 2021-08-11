import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'
import {
    CLOUDINARY_NAME,
    CLOUDINARY_PUBLIC_KEY,
    CLOUDINARY_SECRET_KEY
} from '../constants/cloudinary.constant'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_PUBLIC_KEY || CLOUDINARY_PUBLIC_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY || CLOUDINARY_SECRET_KEY
})

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png', 'mp3', 'jpeg'],
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
    params1: {
        format: 'mp3',
        resource_type: 'video'
    },
    params: async (req, file) => {
        let folderName = 'images'
        let resourceType = 'image'

        if (file.mimetype.startsWith('audio')) {
            folderName = 'songs'
            resourceType = 'video'
        }
        return {
            folder: folderName,
            resource_type: resourceType
        }
    }
})

const uploadCloud = multer({ storage })

export default uploadCloud
