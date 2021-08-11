export const encodePassword = async (password) => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const checkPassword = async (hash, password) => {
    return await bcrypt.compare(password, hash)
}
