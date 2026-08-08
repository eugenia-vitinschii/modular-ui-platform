<template>
   <div class="muk-error-page">
      <div class="muk-error-page__content">
         <muk-text :type="'muk-heading'" :align="'center'">{{ code }}</muk-text>
         <muk-text :type="'muk-subheading'" :align="'center'">{{ title }}</muk-text>
         <muk-text :align="'center'">{{ description }} </muk-text>
      </div>
      <div class="muk-error-page__actions" v-if="buttonText">
         <muk-button @click="onAction" :variant="'success'">{{ buttonText }}</muk-button>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONETS */
import { MukButton, MukText } from 'modular-ui-kit-vue'

/* === PROPS & EMITS === */
const props = defineProps<{
   code: string | number,
   title: string,
   description: string
   buttonText?: string
}>()

const emit = defineEmits<{
   (e: 'action'): void
}>()

function onAction() {
   emit('action')
}
</script>

<style lang="sass">
.error-page-wrapper
   height: 100vh
   display: flex
   align-items: center
   flex-direction: column
   justify-content: center

.muk-error-page
   max-width: 500px
   display: flex
   flex-direction: column
   align-items: center

</style>