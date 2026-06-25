<template>
  <div class="wrapper">
    <app-header />
    <div class="content">
      <router-view />
      <div class="container">
        <h1 class="heading">Lorem, ipsum dolor [heading].</h1>
        <h4 class="subheading">Lorem ipsum dolor sit amet. [subheading]</h4>
        <p class="body-text">[body-text] Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur
          dignissimos
          tempore adipisci
          doloribus aut fuga est rerum, optio ipsam! Ipsam aut accusantium minus tenetur. Laborum tempore distinctio
          enim
          numquam.</p>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
/* === COMPONENTS === */
import AppHeader from './widgets/AppHeader.vue';
import AppFooter from './widgets/AppFooter.vue';

</script>
