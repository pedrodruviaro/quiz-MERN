const Joi = require("joi");

function registerValidation(data) {
    const schema = Joi.object({
        username: Joi.string().required().min(6).max(100),
        email: Joi.string().required().min(6).max(150).email(),
        password: Joi.string().required().min(6).max(72),
    });

    return schema.validate(data);
}

function loginValidation(data) {
    const schema = Joi.object({
        email: Joi.string().required().min(6).max(150).email(),
        password: Joi.string().required().min(6).max(72),
    });

    return schema.validate(data);
}

module.exports = {
    loginValidation,
    registerValidation,
};
