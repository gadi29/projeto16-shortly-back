import { Router } from "express";

import urlValidateMiddleware from "../middlewares/urlValidateMiddleware.js";
import authenticateUser from "../middlewares/authenticateUsersMiddleware.js";
import { generateShortUrl } from "../controllers/urlsControllers.js";
import { getUrlObject } from "../controllers/urlsControllers.js";

const urlsRoutes = Router();

urlsRoutes.post('/urls/shorten', authenticateUser, urlValidateMiddleware, generateShortUrl);
urlsRoutes.get('/urls/:id', getUrlObject);

export default urlsRoutes;