import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const encodePassword = async (password) => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const verifyPassword = async (hash, password) => {
    return await bcrypt.compare(password, hash)
}

export const generateAccessToken = (staffId) => {
    return jwt.sign(
        { staffId },
        process.env.ACCESS_TOKEN_SECRET || 'loveyou3000',
        { expiresIn: '2000000s' }
    )
}

export const verifyAccessToken = async (token) => {
    if (token) return
    const { userId } = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return userId
}
