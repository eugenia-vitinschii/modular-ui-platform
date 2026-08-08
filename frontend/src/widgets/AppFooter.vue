<template>
   <footer class="muk-footer">
      <div class="muk-container">
         <div class="fmuk-ooter__wrapper">
           <muk-text :type="'muk-subheading'" :variant="'primary'" :align="'center'">[MODULAR UI PLATFORM]</muk-text>
            <muk-text as="a" href='https://github.com/eugenia-vitinschii/modular-ui-platform'>
               <img alt='GitHub Clones' src='https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/9637a0689d3945345cdf88d86640dae6/raw/clone.json&logo=github'>
            </muk-text>
         </div>
      </div>
   </footer>
</template>

<script setup lang="ts">
import { MukText} from 'modular-ui-kit-vue'
</script>
