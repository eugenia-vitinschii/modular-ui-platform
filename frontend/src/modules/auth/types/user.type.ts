//user

import type { Role } from "@/shared/enums/role.enum"

export interface User {
   id: string
   email: string
   name: string
   role: Role
}

export interface AuthResponse {
   token: string
   user: User
}