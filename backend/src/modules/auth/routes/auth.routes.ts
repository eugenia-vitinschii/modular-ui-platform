/* AUTH ROUTES  [register, login, logout, me] */

import { Router } from "express";

import { authController } from "../controllers/auth.controllers.js";

import { validateResource } from "@/middleware/validateResource.middleware.js";

import { RegisterUserDto } from "../dtos/register-user.dto.js";
import { LoginUserDto } from "../dtos/login-user.dto.js";

const router = Router()

/* REGISTER */
router.post('/register', validateResource(RegisterUserDto), authController.register)

/* LOGIN */
router.post('/login', validateResource(LoginUserDto),authController.login)

export default router