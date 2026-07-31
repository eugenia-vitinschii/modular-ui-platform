/* AUTH API */

import { api } from "@/shared/api";
import type { LoginPayload, RegisterPayload, AuthResponse, User } from "../types";

export const authApi = {
   login(payload: LoginPayload) {
      return api.post<AuthResponse>('/auth/login', payload)
   },
   register(payload: RegisterPayload) {
      return api.post<AuthResponse>('/auth/register', payload)
   },
   getMe() {
      return api.post<User>('/auth/me')
   },

}