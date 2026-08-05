/* AUTH CONTROLLERS [register, login, logout, me] */

import { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service.js";

class AuthController {
   /* REGISTER USER */
   register = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const data = await authService.registerUser(req.body)
         res.status(201).json(data)
      } catch (error) {
         next(error)
      }
   }
   /* LOGIN USER */
   login = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const data = await authService.loginUser(req.body)
         res.status(200).json(data)
      } catch (error) {
         next(error)
      }
   }
   /* GET ME */
   getMe = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const id = req.user!.id as string
         const data = await authService.getMe(id)
         res.status(200).json(data)
      } catch (error) {
         next(error)
      } 
   }  
    /* LOGOUT */
   logout = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const data = await authService.logout()
         res.status(200).json(data)
      } catch (error) {
         next(error)
      }
   }
  
}

export const authController = new AuthController()