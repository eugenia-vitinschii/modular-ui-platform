/* AUTH SERVICE [register, login, logout, me] */

import {z} from 'zod'
import bcrypt from 'bcrypt'

import { UserModel } from '@/modules/users/models/user.model.js'

import { RegisterUserDto } from "../dtos/register-user.dto.js"
import { LoginUserDto } from '../dtos/login-user.dto.js'

import { ConflictError } from '@/common/errors/conflict.error.js'
import { signToken } from '@/common/utils/jwt.js'
import { UnauthorizedError } from '@/common/errors/unauthorized.error.js'

const SALT_ROUNDS = 10

type RegisterUserINput = z.infer<typeof RegisterUserDto>
type LoginUserInput = z.infer<typeof LoginUserDto>

class AuthService {
   /* REGISTER USER */
   async registerUser(data: RegisterUserINput){
      const existingUser = await UserModel.findOne({ email: data.email})

      if(existingUser){
         throw new ConflictError("User with this email already exists!")
      }

      const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS)

      const user = await UserModel.create({
         name: data.name,
         email: data.email,
         password: hashedPassword,
         role: data.role
      })

      const token = signToken({id: user.id, role: user.role})

      return {
         user,
         token
      }
   } 
   /* LOGIN USER  */
   async loginUser(data: LoginUserInput){
      const user = await UserModel.findOne({$or: [{email: data.login}, {name: data.login}]})

      if(!user){
         throw new UnauthorizedError("Invalid credentials")
      }

      const isMatch = await bcrypt.compare(data.password, user.password)

      if(!isMatch){
         throw new UnauthorizedError("Invalid credentials")
      }
      const token = signToken({
         id: user.id,
         role: user.role,
      })

      return {
         user, 
         token
      }

   }
}

export const authService = new AuthService()