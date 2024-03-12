<template>
  <div class="dark:bg-gray-800">
    <div class="text-black">{{ moment(date).format("YYYY-MM-DD") }}</div>
  </div>
</template>

<script setup>
import moment from "moment";

let props = defineProps({
  date: String,
});
</script>
