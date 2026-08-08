<template>
   <header class="muk-header">
      <div class="muk-container">
         <div class="muk-header__wrapper">
            <div class="muk-header__logo">
               <muk-text as="router-link" :varinat="'primary'" :to="'/'">[Modular UI Platform]</muk-text>
            </div>
            <nav class="muk-header__nav">
               <ul>
                  <template v-if="auth.isAuthenticated">
                     <li>
                        <muk-text as="router-link" :to="'/profile'">profile</muk-text>
                     </li>
                     <muk-icon-button @click="handleLogout" aria-label="Log out">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                           <path
                              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                        </svg>
                     </muk-icon-button>
                  </template>
                  <template v-else>
                     <li>
                        <muk-text as="router-link" :to="'/auth/login'">login</muk-text>
                     </li>
                     <li>
                        <muk-text as="router-link" :to="'/auth/register'">register</muk-text>
                     </li>
                  </template>
               </ul>
            </nav>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts">
/* VUE & ROUTER */
import { useRouter } from 'vue-router';

/* COMPONENTS */
import {MukText, MukIconButton } from 'modular-ui-kit-vue'

/* STORE */
import { useAuthStore } from '@/modules/auth/store/useAuthStore';

const auth = useAuthStore()
const router = useRouter()

const handleLogout = () => {
   auth.logout();
   router.push('/auth/login')
}
</script>

