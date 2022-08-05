import { Router } from "express";

import urlValidateMiddleware from "../middlewares/urlValidateMiddleware.js";
import { generateShortUrl } from "../controllers/urlsControllers.js";
import authenticateUser from "../middlewares/authenticateUsersMiddleware.js";

const urlsRoutes = Router();

urlsRoutes.post('/urls/shorten', authenticateUser, urlValidateMiddleware, generateShortUrl);
urlsRoutes.get('/urls/:id', getUrlObject);

export default urlsRoutes;