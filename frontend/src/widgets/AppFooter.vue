<template>
   <footer class="footer">
      <div class="container">
         <div class="footer__wrapper">
           <base-text :type="'subheading'" :variant="'primary'" :align="'center'">[MODULAR UI PLATFORM]</base-text>
            <base-text as="a" href='https://github.com/eugenia-vitinschii/modular-ui-platform'>
               <img alt='GitHub Clones' src='https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/9637a0689d3945345cdf88d86640dae6/raw/clone.json&logo=github'>
            </base-text>
         </div>
      </div>
   </footer>
</template>

<script setup lang="ts">
import { BaseText} from 'modular-ui-kit-vue'
</script>
