<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper  error-page-wrapper">
            <base-error-page-state code="403" title="Access Denied" button-text="go to home" @action="goHome"
               description="You don't have permission to view this page. If you think this is a mistake, please contact your system administrator" />
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* ROUTER */
import { useRouter } from 'vue-router'

/* COMPONENTS */
import BaseErrorPageState from '../components/BaseErrorPageState.vue';

const router = useRouter()

function goHome() {
   router.push('/')
}
</script>
