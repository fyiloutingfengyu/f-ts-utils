<script setup lang="ts">
import { dateFormat, setLocalStorage } from 'f-ts-utils';

const nowDate = dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss:SS');

setLocalStorage('vueDemoToken', 'vue123');

</script>

<template>
  <div>
    {{ nowDate }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
