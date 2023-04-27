<script setup lang="ts">
import { dateFormat, setLocalStorage, getDataType } from 'f-ts-utils';

const nowDate = dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss:SS');

setLocalStorage('vueDemoToken', 'vue123');

let a = function(){};

console.log('调试', getDataType(a));

</script>

<template>
  <div>
    {{ nowDate }}
  </div>
</template>

<style scoped>

</style>
