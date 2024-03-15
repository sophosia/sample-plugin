<template>
  <h1>Hello, this is a page view</h1>
  <button @click="onClick">click me!</button>
  <div>Count: {{ count }}</div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { PropType } from "vue";
const props = defineProps({
  loadData: { type: Function as PropType<() => Promise<any>>, required: true },
  saveData: { type: Function as PropType<(data: any) => Promise<void>>, required: true }
});

const count = ref(0);

onMounted(async () => {
  const data = await props.loadData();
  count.value = data.count;
});

watch(count, async () => {
  await props.saveData({ count: count.value });
});

function onClick() {
  count.value++;
}
</script>
