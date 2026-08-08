<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper  error-page-wrapper">
            <muk-error-page-state code="500" title="Internal Server Error" button-text="try again"
               @action="handleReload"
               description="Something went wrong on our end. Our technical team has been notified, and we are working to fix the issue. Please try again later" />
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import MukErrorPageState from '../components/MukErrorPageState.vue';

function handleReload() {
   window.location.reload()
}
</script>