<template>
  <div id="page-container">
    <div class="w-full border border-red-500">
      testing tailwind
    </div>
    <div>
      <Button label="testing primevue"/>
    </div>
    <div id="page-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import './css/index.css'
import { Button } from 'primevue';
</script>
