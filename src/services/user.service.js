import User from '../models/user.model'
import { encodePassword } from '../utils/auth'
import { toDate } from '../utils/date'

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
            return { users, pagination: { page, limit, count } }
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
            newUser.dateOfBirth = toDate(newUser.dateOfBirth)
            const user = await new User({
                ...newUser
            }).save()
            delete user._doc.password
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(userId, updateUser) {
        try {
            if (updateUser.dateOfBirth)
                updateUser.dateOfBirth = toDate(updateUser.dateOfBirth)
            if (updateUser.password)
                updateUser.password = await encodePassword(updateUser.password)
            const user = await User.findByIdAndUpdate(userId, updateUser, {
                new: true
            })
            return user
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

    async deleteSoft(userId) {
        try {
            const user = await User.findById(userId)
            user.isDelete = 1
            await user.save()
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new UserService()
