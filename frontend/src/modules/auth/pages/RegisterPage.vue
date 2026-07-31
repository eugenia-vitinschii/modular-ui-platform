<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text :type="'heading'" as="h1" :align="'center'">Register</base-text>
               <base-text :type="'subheading'" as="h2" :align="'center'">Create an account to get started.</base-text>
            </div>
            <div class="page__content ">
               <div class="form-wrapper section">
                  <form class="form" @submit.prevent="submit">
                     <div class="form__error" v-if="auth.error">
                        <base-text :variant="'danger'" :align="'center'">{{ auth.error }}</base-text>
                     </div>
                     <div class="form__item">
                        <base-input v-model="name" label="*Enter name" placeholder="Jonathan Davis"
                           autocomplete="name" />
                     </div>
                     <div class="form__item">
                        <base-input v-model="email" type="email" label="*Enter email" placeholder="example@email.com"
                           autocomplete="email" />
                     </div>
                     <div class="form__item">
                        <base-input v-model="password" type="password" label="*Enter password"
                           autocomplete="new-password" />
                     </div>
                     <div class="form__actions">
                        <base-button :variant="'secondary'" @click="handleLogin">login</base-button>
                        <base-button :type="'submit'" :loading="auth.isLoading"
                           :disabled="auth.isLoading">register</base-button>
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
