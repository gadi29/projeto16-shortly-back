import signinSchema from '../schemas/signinSchema.js';

async function signinValidateMiddleware (req, res, next) {
  const user = req.body;

  const validateUser = signinSchema.validate(user, { abortEarly: false });
  if (validateUser.error) {
    return res.status(422).send(validateUser.error.details);
  }

  res.locals.user = user;
  next();
}

export default signinValidateMiddleware;