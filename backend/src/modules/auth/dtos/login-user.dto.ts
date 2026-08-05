/* LOGIN USER DTO */

import {z} from 'zod'

export const LoginUserDto = z.object({
   login: z.string().min(2),
   password: z.string().min(4),
})