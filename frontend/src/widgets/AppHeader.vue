<template>
   <header class="header">
      <div class="container">
         <div class="header__wrapper">
            <div class="header__logo">
               <base-text as="router-link" :varinat="'primary'" :to="'/'">[Modular UI Platform]</base-text>
            </div>
            <nav class="header__nav">
               <ul>
                  <template v-if="auth.isAuthenticated">
                     <li>
                        <base-text as="router-link" :to="'/profile'">profile</base-text>
                     </li>
                     <base-icon-button @click="handleLogout" aria-label="Log out">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                           <path
                              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                        </svg>
                     </base-icon-button>
                  </template>
                  <template v-else>
                     <li>
                        <base-text as="router-link" :to="'/auth/login'">login</base-text>
                     </li>
                     <li>
                        <base-text as="router-link" :to="'/auth/register'">register</base-text>
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
import { BaseText, BaseIconButton } from 'modular-ui-kit-vue'

/* STORE */
import { useAuthStore } from '@/modules/auth/store/useAuthStore';

const auth = useAuthStore()
const router = useRouter()

const handleLogout = () => {
   auth.logout();
   router.push('/auth/login')
}
</script>

<style lang="sass">

.header
   padding: 20px
   
</style>

