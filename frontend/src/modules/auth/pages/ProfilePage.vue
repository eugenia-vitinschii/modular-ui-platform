<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <muk-text :type="'muk-heading'" as="h1" v-if="auth.isAuthenticated">My profile</muk-text>
            <div class="muk-page__content profile">
               <div class="profile-info muk-section" v-if="auth.isAuthenticated">
                  <muk-text :type="'subheading'" as="h2">Hi {{ auth.user?.name }} !</muk-text>
                  <muk-text> {{ auth.user?.email }} !</muk-text>
                  <div class="profile-actions">
                     <muk-button :variant="'secondary'" @click="handleLogout">logout</muk-button>
                  </div>
               </div>
               <div class="profile-guest muk-section" v-else>
                  <muk-text :type="'muk-subheading'" as="h2">You are not logged in!</muk-text>
                  <div class="profile-actions">
                     <muk-button @click="handleLogin">login</muk-button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import { MukText, MukButton } from 'modular-ui-kit-vue'

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