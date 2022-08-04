import { Router } from "express";
import { signupValidateMiddleware, singinValidateMiddleware } from "../middlewares/signupValidateMiddleware.js";
import { signup, signin } from "../controllers/authControllers.js";

const authRoutes = Router();

authRoutes.post('/signup', signupValidateMiddleware, signup);
authRoutes.post('/singin', singinValidateMiddleware, signin);

export default authRoutes;