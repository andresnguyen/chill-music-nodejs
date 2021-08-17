import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const encodePassword = async (password) => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const verifyPassword = async (hash, password) => {
    return await bcrypt.compare(password, hash)
}

export const generateAccessToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.ACCESS_TOKEN_SECRET || 'loveyou3000',
        { expiresIn: '2000000s' }
    )
}

export const verifyAccessToken = async (token) => {
    if (!token) return
    const user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return user
}
