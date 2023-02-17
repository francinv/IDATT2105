<template>
  <div class="btn-container" >
    <button :type="type" :class="[buttonClass, {'btn-disabled': disabled}]" @click="action" :disabled="disabled">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    label: String,
    type: String,
    action: Function,
    buttonClass: String,
    disabled: Boolean
  },
};
</script>
