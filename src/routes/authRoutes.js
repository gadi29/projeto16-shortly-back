import { Router } from "express";
import signupValidateMiddleware from "../middlewares/signupValidateMiddleware.js";
import singinValidateMiddleware from "../middlewares/singinValidateMiddleware.js";
import { signup, signin } from "../controllers/authControllers.js";

const authRoutes = Router();

authRoutes.post('/signup', signupValidateMiddleware, signup);
authRoutes.post('/singin', singinValidateMiddleware, signin);

export default authRoutes;