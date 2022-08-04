import newUserSchema from '../schemas/signupSchema.js';

async function signupValidateMiddleware (req, res, next) {
  const newUser = req.body;

  const validateUser = newUserSchema.validate(newUser);
  if (validateUser.error) {
    return res.status(422).send(validateUser.error);
  }

  res.locals.user = newUser;
  next();
}

export default signupValidateMiddleware;