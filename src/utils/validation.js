const Joi = require('joi')

export const loginValidation = (data) => {
    const schemaLogin = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
    })

    return schemaLogin.validate(data)
}

export const registerValidation = (data) => {
    const schemaRegister = Joi.object({
        email: Joi.string().email(),
        fullname: Joi.string().email(),
        dayOfBirth: Joi.string().min(8).max(8).require(),
        gender: Joi.string().email(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        rePassword: Joi.ref('password'),
    })

    return schemaRegister.validate(data)
}

export const songValidation = (data) => {
    const schemaSong = Joi.object({
        name: Joi.string().email(),
        path: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        image: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        genre: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        artists: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    return schemaSong.validate(data)
}

export const albumValidation = (data) => {
    const schemaSong = Joi.object({
        name: Joi.string().email(),
        image: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        artists: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    return schemaAlbum.validate(data)
}

export const playlistValidation = (data) => {
    const schemaSong = Joi.object({
        name: Joi.string().email(),
    })

    return schemaPlaylist.validate(data)
}
