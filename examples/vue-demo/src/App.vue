<script setup lang="ts">
import { dateFormat, setLocalStorage, deepAssign, noRepeat } from 'f-ts-utils';

const nowDate = dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss:SS');

setLocalStorage('vueDemoToken', 'vue123');

let objA = {
  name: 'f',
  userList: [
    {
      name: 'f1',
      age: '1'
    },
    {
      name: 'f2'
    }
  ],
  detailInfo: {
    price: 150,
    specification: [
      {
        color: 'black'
      }
    ]
  }
};

let objB = {
  name: 'test',
  age: 18,
  userList: [
    {
      name: 'f3',
      age: 3
    }
  ],
  detailInfo: {
    name: '商品名称',
    price: 100,
    specification: [
      {
        color: 'red',
        price: 2000
      },
      {
        color: 'white',
        price: 1999
      },

    ]
  }
};

let objC = {
  detailInfo: {
    name: 'xiao mi',
    title: 'product detail'
  }
};

console.log('test2', deepAssign(objA, objB));
// console.log('test1', deepAssign({}, objA, objB));
// console.log('test3', deepAssign({}, objA, objB, objC));

let testArr = [1, 2, 3, 6, 6, 7, 8];
console.log(noRepeat(testArr));

</script>

<template>
  <div>
    {{ nowDate }}
  </div>
</template>

<style scoped>

</style>
