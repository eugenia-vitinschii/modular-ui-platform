/* AUTH ROUTES  [register, login, logout, me] */

import { Router } from "express";

import { authController } from "../controllers/auth.controllers.js";

import { validateResource } from "@/middleware/validateResource.middleware.js";

import { RegisterUserDto } from "../dtos/register-user.dto.js";
import { LoginUserDto } from "../dtos/login-user.dto.js";
import { authMiddleware } from "@/middleware/auth.middleware.js";

const router = Router()

/* REGISTER */
router.post('/register', validateResource(RegisterUserDto), authController.register)

/* LOGIN */
router.post('/login', validateResource(LoginUserDto), authController.login)

/* GET ME */
router.get('/me', authMiddleware, authController.getMe)

/* LOGOUT */
router.post('/logout', authController.logout)

export default router