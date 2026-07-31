
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";


/* === ERROR ROUTES === */
import { errorRoutes } from '@/modules/errors/routes/error.routes.ts';

/* === LANDING ROUTES === */
import { landingRoutes } from '@/modules/landing/routes/landing.routes';

/* === LANDING ROUTES === */
import { authRoutes } from '@/modules/auth/routes/auth.routes';

const routes: RouteRecordRaw[] = [
   ...errorRoutes,
   ...landingRoutes,
   ...authRoutes,
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router