const mongoose = require('mongoose')

// nếu ở schema không có một thuộc tính bất kì, nhưng ở trên db thì có sẽ
// lấy ra thì được, nhưng các thao tác (tạo, sửa, xóa) thì không được.
const artistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        avatarUrl: {
            type: String,
            required: true
        },
        bannerUrl: {
            type: String,
            required: true
        },
        genreList: {
            type: Array,
            required: true
        },
        description: {
            type: String,
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

export default mongoose.model('artist', artistSchema, 'artists')
