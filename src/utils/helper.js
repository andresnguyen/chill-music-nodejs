import bcrypt from 'bcryptjs'
import path from 'path'
import rfs from 'rotating-file-stream'

export const accessLogStream = rfs('access.log', {
    interval: '1d',
    path: path.resolve(__dirname, '..', 'log'),
})

export const encodePassword = async (password) => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const checkPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}
