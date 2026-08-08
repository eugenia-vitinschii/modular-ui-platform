<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="pmuk-age__header">
               <muk-text :type="'muk-heading'" as="h1" :align="'center'">Register</muk-text>
               <muk-text :type="'muk-subheading'" as="h2" :align="'center'">Create an account to get started.</muk-text>
            </div>
            <div class="muk-page__content ">
               <div class="muk-form-wrapper muk-section">
                  <form class="muk-form" @submit.prevent="submit">
                     <div class="muk-form__error" v-if="auth.error">
                        <muk-text :variant="'danger'" :align="'center'">{{ auth.error }}</muk-text>
                     </div>
                     <div class="muk-form__item">
                        <muk-input v-model="name" label="*Enter name" placeholder="Jonathan Davis"
                           autocomplete="name" />
                     </div>
                     <div class="muk-form__item">
                        <muk-input v-model="email" type="email" label="*Enter email" placeholder="example@email.com"
                           autocomplete="email" />
                     </div>
                     <div class="muk-form__item">
                        <muk-input v-model="password" type="password" label="*Enter password"
                           autocomplete="new-password" />
                     </div>
                     <div class="muk-form__actions">
                        <muk-button :variant="'secondary'" @click="handleLogin">login</muk-button>
                        <muk-button :type="'submit'" :loading="auth.isLoading"
                           :disabled="auth.isLoading">register</muk-button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE & ROUTER */
import { useRouter } from 'vue-router';
import { onUnmounted, ref } from 'vue';

/* COMPONENTS */
import { MukText, MukInput, MukButton } from 'modular-ui-kit-vue'

/* STORE */
import { useAuthStore } from '../store/useAuthStore';

const auth = useAuthStore()
const router = useRouter()

/* state */
const email = ref('')
const name = ref('')
const password = ref('')


const submit = async () => {
   if (!name.value || !email.value || !password.value) return

   const isSuccess = await auth.register({ name: name.value, email: email.value, password: password.value })

   if (isSuccess) {
      router.push({ name: 'profile' })
   }
}

const handleLogin = () => {
   router.push('/auth/login')
}

onUnmounted(() => {
   auth.clearError()
})
</script>
