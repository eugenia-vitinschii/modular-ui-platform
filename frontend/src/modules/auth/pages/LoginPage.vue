<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text :type="'muk-heading'" as="h1" :align="'center'">Login</muk-text>
               <muk-text :type="'muk-subheading'" as="h2" :align="'center'">Welcome back! Please enter your
                  details.</muk-text>
            </div>
            <div class="muk-page__content ">
               <div class="muk-form-wrapper muk-section">
                  <form class="fmuk-orm" @submit.prevent="submit">
                     <div class="muk-orm__error" v-if="auth.error">
                        <muk-text :variant="'danger'" :align="'center'">{{ auth.error }}</muk-text>
                     </div>
                     <div class="muk-form__item">
                        <muk-input v-model="login" type="text" label="*Enter email or name" placeholder="example@email.com"
                           autocomplete="username" />
                     </div>
                     <div class="muk-form__item">
                        <muk-input v-model="password" type="password" label="*Enter password"
                           autocomplete="current-password" />
                     </div>
                     <div class="muk-form__actions">
                        <muk-button :variant="'secondary'" @click="handleRegister">register</muk-button>
                        <muk-button :type="'submit'" :loading="auth.isLoading" :error="auth.error"
                           :disabled="auth.isLoading">login</muk-button>
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
import { MukText,MukInput,MukButton } from 'modular-ui-kit-vue'

/* STORE */
import { useAuthStore } from '../store/useAuthStore';

const auth = useAuthStore()
const router = useRouter()

/* state */
const login = ref('')
const password = ref('')


const submit = async () => {
   auth.clearError()

   if (!login.value || !password.value){
      auth.error = 'Please fill in all required fields correctly. '
      return
   }
   const isSuccess = await auth.login({login: login.value, password: password.value })

   if (isSuccess) {
      router.push({ name: 'profile' })
   }
}

const handleRegister = () => {
   router.push('/auth/register')
}

onUnmounted(() => {
   auth.clearError()
})
</script>
