<script lang="ts">
export default {
  name: "CalcButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    action: {
      type: Function,
      default: () => 1,
    },
    additionalClasses: {
      type: String,
      default: "",
    },
  },
}
</script>

<template>
  <button :class="additionalClasses" class="calc-btn" @click="action">
    {{ label }}
  </button>
</template>
