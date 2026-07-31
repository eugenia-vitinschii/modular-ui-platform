/* AUTH STORE */

import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { authApi } from "../api/auth.api";
//types
import type { LoginPayload, RegisterPayload, User } from "../types";


export const useAuthStore = defineStore("auth", () => {
   const user = ref<User | null>(null)
   const token = ref<string | null>(null)

   const isLoading = ref(false)
   const error = ref<string | null>(null)

   const isAuthenticated = computed(() => !!token.value && token.value !== 'null')

   function clearError() {
      error.value = null
   }
   /* === AUTO LOGIN === */
   const savedUser = localStorage.getItem('user');
   const savedToken = localStorage.getItem('token');

   if (savedUser) {
      try {
         user.value = JSON.parse(savedUser)
      } catch {
         localStorage.removeItem("user")
      }
   }
   if (savedToken) {
      token.value = savedToken
   }

   /* === LOGIN === */
   async function login(credentials: LoginPayload) {
      isLoading.value = true
      error.value = null

      try {
         const { data } = await authApi.login(credentials)

         user.value = data.user;
         token.value = data.token;

         localStorage.setItem("user", JSON.stringify(data.user));
         localStorage.setItem("token", data.token);

         return true
      } catch (err: any) {
         error.value = err?.response?.data?.message || "Failed to log in. Please check your credentials.";
         return false
      }
   }
   /* === REGISTER === */
   async function register(credentials: RegisterPayload) {
      isLoading.value = true
      error.value = null
      try {
         const { data } = await authApi.register(credentials)

         user.value = data.user;
         token.value = data.token;

         localStorage.setItem("user", JSON.stringify(data.user));
         localStorage.setItem("token", data.token);

         return true
      } catch (err: any) {
         error.value = err?.response?.data?.message || "Failed to log in. Please check your credentials.";
         return false
      }
   }

   /* === LOGOUT === */
   function logout() {
      user.value = null;
      token.value = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
   }

   return {
      //state
      user,
      token,
      isLoading,
      error,
      isAuthenticated,
      //actions
      login,
      register,
      logout,
      clearError,
   }

})