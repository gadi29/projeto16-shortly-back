import { Router } from "express";
import signupValidateMiddleware from "../middlewares/signupValidateMiddleware.js";
import signinValidateMiddleware from "../middlewares/signinValidateMiddleware.js";
import { signup, signin } from "../controllers/authControllers.js";

const authRoutes = Router();

authRoutes.post('/signup', signupValidateMiddleware, signup);
authRoutes.post('/signin', signinValidateMiddleware, signin);

export default authRoutes;