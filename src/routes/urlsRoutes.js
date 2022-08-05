import { Router } from "express";

import urlValidateMiddleware from "../middlewares/urlValidateMiddleware.js";
import authenticateUser from "../middlewares/authenticateUsersMiddleware.js";
import { 
  generateShortUrl, 
  getUrlObject, 
  redirectToUrl, 
  deleteUrl 
} from "../controllers/urlsControllers.js";

const urlsRoutes = Router();

urlsRoutes.post('/urls/shorten', authenticateUser, urlValidateMiddleware, generateShortUrl);
urlsRoutes.get('/urls/:id', getUrlObject);
urlsRoutes.get('/urls/open/:shortUrl', redirectToUrl);
urlsRoutes.delete('/urls/:id', authenticateUser, deleteUrl);

export default urlsRoutes;