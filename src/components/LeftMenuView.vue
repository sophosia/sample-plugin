<template>
  <div class="sample-plugin-component">
    <h1>Hello, this is a left menu view</h1>
    <button @click="onClick">click me!</button>
    <div>Count: {{ count }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// import css so vite can include it in the build
import "../assets/sample-class.css";

const count = ref(0);

function onClick() {
  count.value++;
}
</script>
