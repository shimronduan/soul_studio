const Joi = require('joi')

const validateCreateCategory = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(5).required()
});

module.exports = loginSchema;