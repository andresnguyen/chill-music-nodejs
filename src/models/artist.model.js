const mongoose = require('mongoose')

// nếu ở schema không có một thuộc tính bất kì, nhưng ở trên db thì có sẽ
// lấy ra thì được, nhưng các thao tác (tạo, sửa, xóa) thì không được.
const artistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        banner: {
            type: String,
            required: true,
        },
        genre: {
            type: Array,
            required: true,
        },
        description: {
            type: String,
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

export default mongoose.model('artist', artistSchema, 'artists')
