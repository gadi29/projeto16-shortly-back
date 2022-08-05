import { Router } from "express";

const urlsRoutes = Router();

urlsRoutes.post('/urls/shorten', urlValidateMiddleware, generateShortUrl);

export default urlsRoutes;