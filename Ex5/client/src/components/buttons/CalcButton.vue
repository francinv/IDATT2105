<script lang="ts">
export default {
  name: "CalcButton",
  props: {
    label: {
      type: String,
      default: '',
    },
    action: {
      type: Function,
      default: () => {},
    },
    style: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <button
    :class="style"
    class="calc-btn"
    @click="action"
  >
    {{ label }}
  </button>
</template>
