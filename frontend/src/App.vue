<template>
  <div class="wrapper">
    <app-header />
    <div class="content">
      <router-view />
      <div class="container">
        <base-text as="h1" :type="'heading'" :variant="'primary'">Modular UI Platform</base-text>
        <base-text as="h2" :type="'subheading'" :variant="'secondary'">A full-stack starter template for developing a platform with a modular interface, built-in authentication, and custom UI-kit integration.</base-text>
        <base-text :variant="'muted'">A full-stack starter template for developing a platform with a modular interface, built-in authentication, and custom UI-kit integration.</base-text>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
/* === COMPONENTS === */
import AppHeader from './widgets/AppHeader.vue';
import AppFooter from './widgets/AppFooter.vue';

import { BaseText} from 'modular-ui-kit-vue'

</script>
