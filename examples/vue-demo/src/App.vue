<script setup lang="ts">
import { dateFormat, setLocalStorage, objToUrlStr } from 'f-ts-utils';

const nowDate = dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss:SS');

setLocalStorage('vueDemoToken', 'vue123');

const testQuery = {
  name: 'f',
  age: 18
};

console.log(objToUrlStr(testQuery)); // name=f&age=18

</script>

<template>
  <div>
    {{ nowDate }}
  </div>
</template>

<style scoped>

</style>
