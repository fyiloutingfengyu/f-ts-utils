<script setup lang="ts">
import { onMounted } from 'vue';
import {
  dateFormat,
  setLocalStorage,
  deepAssign,
  throttle,
  debounce,
  deepClone
} from 'mf-ts-utils';

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

const test = () => {
  console.log(2);
};

const testThrottle = throttle(test, 2000, false);

onMounted(() => {
  window.addEventListener('scroll', debounce(test, 2000));
});

const cloneObj = {
  name: 'clone',
  fn: function () {
    console.log('fn');
  },
  list: [
    {
      color: 'red',
      width: 100,
      info: {
        title: 'test title'
      }
    },
    {
      color: 'blue',
      width: 200,
      f1: function () {
        console.log('f1');
      }
    }
  ],
  date: new Date()
};

console.log('deepClone', deepClone(cloneObj));

</script>

<template>
  <div class="app-container">
    <div>{{ nowDate }}</div>
    <button
      type="button"
      @click="testThrottle"
    >
      throttle
    </button>
  </div>

</template>

<style scoped>
.app-container {
  height: 200vh;
}
</style>
