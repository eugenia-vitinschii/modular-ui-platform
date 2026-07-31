<template>
   <div class="base-error-page">
      <div class="base-error-page__content">
         <base-text :type="'heading'" :align="'center'">{{ code }}</base-text>
         <base-text :type="'subheading'" :align="'center'">{{ title }}</base-text>
         <base-text :align="'center'">{{ description }} </base-text>
      </div>
      <div class="base-error-page__actions" v-if="buttonText">
         <base-button @click="onAction" :variant="'success'">{{ buttonText }}</base-button>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONETS */
import { BaseButton, BaseText } from 'modular-ui-kit-vue'


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

.base-error-page
   max-width: 500px
   display: flex
   flex-direction: column
   align-items: center

</style>