const bcrypt = require('bcrypt')

export const encodePassword = async (password) => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const checkPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}
