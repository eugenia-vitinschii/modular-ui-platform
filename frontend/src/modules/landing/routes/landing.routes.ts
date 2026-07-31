import type { RouteRecordRaw } from "vue-router";

export const landingRoutes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'home',
      meta: { layout: 'Home' },
      component: () => import('../pages/HomePage.vue')
   }
]