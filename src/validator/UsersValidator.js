import Joi from "joi";

const UsersValidator = Joi.object({
    name: Joi.string().required().messages({

    })
})
export {UsersValidator};