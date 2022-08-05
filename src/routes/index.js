import { Router } from "express";

import authRoutes from "./authRoutes.js";
import urlsRoutes from "./urlsRoutes.js";
import usersRoutes from "./usersRoutes.js";

const router = Router();

router.use(authRoutes);
router.use(urlsRoutes);
router.use(usersRoutes);

export default router;