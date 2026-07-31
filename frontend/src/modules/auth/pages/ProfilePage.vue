<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <base-text :type="'heading'" as="h1" v-if="auth.isAuthenticated">My profile</base-text>
            <div class="page__content profile">
               <div class="profile-info section" v-if="auth.isAuthenticated">
                  <base-text :type="'subheading'" as="h2">Hi {{ auth.user?.name }} !</base-text>
                  <base-text> {{ auth.user?.email }} !</base-text>
                  <div class="profile-actions">
                     <base-button :variant="'secondary'" @click="handleLogout">logout</base-button>
                  </div>
               </div>
               <div class="profile-guest section" v-else>
                  <base-text :type="'subheading'" as="h2">You are not logged in!</base-text>
                  <div class="profile-actions">
                     <base-button @click="handleLogin">login</base-button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import { BaseText, BaseButton } from 'modular-ui-kit-vue'

/*STORE */
import { useAuthStore } from '../store/useAuthStore';
import { useRouter } from 'vue-router';

const auth = useAuthStore()
const router = useRouter()

//logout
const handleLogout = () => {
   auth.logout()
   router.push('/auth/login')
}
const handleLogin = () => {
   router.push('/auth/login')
}

</script>