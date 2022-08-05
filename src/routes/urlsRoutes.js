import { Router } from "express";

import urlValidateMiddleware from "../middlewares/urlValidateMiddleware.js";
import { generateShortUrl } from "../controllers/urlsControllers.js";

const urlsRoutes = Router();

urlsRoutes.post('/urls/shorten', urlValidateMiddleware, generateShortUrl);

export default urlsRoutes;