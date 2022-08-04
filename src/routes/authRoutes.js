import { Router } from "express";

const authRoutes = Router();

authRoutes.post('/signup', signupValidateMiddleware, signup);

export default authRoutes;