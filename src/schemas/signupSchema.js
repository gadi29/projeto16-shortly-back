import Joi from 'joi';

const newUserSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(24).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required()
})

export default newUserSchema;