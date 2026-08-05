<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text :type="'heading'" as="h1" :align="'center'">Login</base-text>
               <base-text :type="'subheading'" as="h2" :align="'center'">Welcome back! Please enter your
                  details.</base-text>
            </div>
            <div class="page__content ">
               <div class="form-wrapper section">
                  <form class="form" @submit.prevent="submit">
                     <div class="form__error" v-if="auth.error">
                        <base-text :variant="'danger'" :align="'center'">{{ auth.error }}</base-text>
                     </div>
                     <div class="form__item">
                        <base-input v-model="login" type="text" label="*Enter email or name" placeholder="example@email.com"
                           autocomplete="username" />
                     </div>
                     <div class="form__item">
                        <base-input v-model="password" type="password" label="*Enter password"
                           autocomplete="current-password" />
                     </div>
                     <div class="form__actions">
                        <base-button :variant="'secondary'" @click="handleRegister">register</base-button>
                        <base-button :type="'submit'" :loading="auth.isLoading"
                           :disabled="auth.isLoading">login</base-button>
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
import { BaseText, BaseInput, BaseButton } from 'modular-ui-kit-vue'

/* STORE */
import { useAuthStore } from '../store/useAuthStore';

const auth = useAuthStore()
const router = useRouter()

/* state */
const login = ref('')
const password = ref('')


const submit = async () => {
   if (!login.value || !password.value) return

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
