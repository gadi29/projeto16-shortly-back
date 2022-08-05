import { Router } from "express";

import authenticateUser from "../middlewares/authenticateUsersMiddleware.js";

const usersRoutes = Router();

usersRoutes.post('/users/me', authenticateUser, getUserHistory);

export default usersRoutes;