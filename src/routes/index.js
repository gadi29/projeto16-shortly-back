import { Router } from "express";

import authRoutes from "./authRoutes.js";
import urlsRoutes from "./urlsRoutes.js";

const router = Router();

router.use(authRoutes);
router.use(urlsRoutes);

export default router;