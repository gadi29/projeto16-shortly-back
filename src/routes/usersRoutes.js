import { Router } from "express";

import authenticateUser from "../middlewares/authenticateUsersMiddleware.js";
import { getUserHistory } from "../controllers/usersControllers.js";

const usersRoutes = Router();

usersRoutes.get('/users/me', authenticateUser, getUserHistory);
usersRoutes.get('/ranking', getRanking);

export default usersRoutes;