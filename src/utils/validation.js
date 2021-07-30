const Joi = require('joi')

export const loginValidation = (data) => {
    const schemaLogin = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
    })

    return schemaLogin.validate(data)
}

export const registerValidation = (data) => {
    const schemaRegister = Joi.object({
        email: Joi.string().email().required(),
        fullname: Joi.string().required(),
        dayOfBirth: Joi.string().required(),
        gender: Joi.string().required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
        rePassword: Joi.ref('password').required()
    })

    return schemaRegister.validate(data)
}

export const songValidation = (data) => {
    const schemaSong = Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        image: Joi.string().required(),
        genre: Joi.string().required(),
        artists: Joi.array().required()
    })

    return schemaSong.validate(data)
}

export const albumValidation = (data) => {
    const schemaAlbum = Joi.object({
        name: Joi.string().required(),
        image: Joi.string().required(),
        artists: Joi.string().array().required()
    })

    return schemaAlbum.validate(data)
}

export const playlistValidation = (data) => {
    const schemaPlaylist = Joi.object({
        name: Joi.string().required()
    })

    return schemaPlaylist.validate(data)
}
