/* ROUTES */

import { Router } from "express";

/* AUTH  */
import authRoutes from '@/modules/auth/routes/auth.routes.js'


const router = Router()

/* auth routes */
router.use('/auth', authRoutes)

export default router;