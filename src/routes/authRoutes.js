import { Router } from "express";
import signupValidateMiddleware from "../middlewares/signupValidateMiddleware.js";
import { signup } from "../controllers/authControllers.js";

const authRoutes = Router();

authRoutes.post('/signup', signupValidateMiddleware, signup);

export default authRoutes;