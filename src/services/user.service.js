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
            throw new Error(error)
        }
    }

    async getById(userId) {
        try {
            const user = await User.findById(userId).lean()
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    async create(newUser) {
        try {
            const user = await new User({ ...newUser }).save()
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(userId, updateUser) {
        try {
            const user = await User.findById(userId)
            return await user.save()
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(userId) {
        try {
            const user = await User.findByIdAndDelete(userId)
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new UserService()
