import User from '../models/user.model'

class UserService {
    async getAll({ page = 0, limit = 20, q = '' }) {
        page = Number.parseInt(page)
        limit = Number.parseInt(limit)
        const query = q ? { name: new RegExp(q, 'i') } : {}

        try {
            const users = await User.find(query)
                .skip(page * limit)
                .limit(limit)
                .lean()

            const count = await User.find(query).count()

            return { users, page, limit, count }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getOne(userId) {
        try {
            return User.findById(userId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async postOne({ name }) {
        const user = { name }
        try {
            return new User({ ...user }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOne(userId, { name }) {
        const newUser = { name } // validation
        try {
            const user = await User.findById(userId)
            user.name = name
            return user.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOne(userId) {
        try {
            return User.findByIdAndDelete(userId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new UserService()
