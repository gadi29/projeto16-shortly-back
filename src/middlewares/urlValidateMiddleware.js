import urlSchema from "../schemas/urlSchema.js";

async function urlValidateMiddleware (req, res, next) {
  const url = req.body;

  const validateUrl = urlSchema.validate(url, { abortEarly: false });
  if (validateUrl.error) {
    return res.status(422).send(validateUrl.error.details);
  }

  res.locals.url = url;
  next();
}

export default urlValidateMiddleware;