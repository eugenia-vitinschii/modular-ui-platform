/* REGISTER USER DTO */

import {z} from 'zod'
import { Role } from '@/common/enums/role.enum.js'

export const RegisterUserDto = z.object({
   name: z.string({}).min(2),
   email: z.string().email(),
   password: z.string().min(4),
   role: z.nativeEnum(Role).default(Role.USER),
})