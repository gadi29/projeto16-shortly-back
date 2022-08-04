import { Router } from "express";
import signupValidateMiddleware from "../middlewares/signupValidateMiddleware.js";

const authRoutes = Router();

authRoutes.post('/signup', signupValidateMiddleware, signup);

export default authRoutes;