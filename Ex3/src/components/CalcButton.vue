<script lang="ts">
export default {
  props: {
    label: String,
    action: Function,
    style: String,
  },
};
</script>

<template>
  <button @click="action" :class="style" class="calc-btn">{{ label }}</button>
</template>
