<template>
  <Transition name="fade" mode="out-in">
    <div class="muk-wrapper" v-if="route.meta.layout === 'error' || route.meta.layout === 'login'">
      <div class="muk-content">
        <router-view />
      </div>
    </div>
    <div class="muk-wrapper" v-else>
      <app-header />
      <div class="muk-content">
        <muk-breadcrumbs />
        <router-view />
        <muk-toast-container />
      </div>
      <app-footer />
    </div>
  </Transition>
</template>

<script setup lang="ts">
/* ROUTER */
import { useRoute } from 'vue-router';

/* === COMPONENTS === */
import AppHeader from './widgets/AppHeader.vue';
import AppFooter from './widgets/AppFooter.vue';

import { MukBreadcrumbs, MukToastContainer } from 'modular-ui-kit-vue'

const route = useRoute()

</script>
