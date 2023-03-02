<template>
  <div class="btn-container">
    <button
      :type="type"
      :class="[buttonClass, {'btn-disabled': disabled}]"
      :disabled="disabled"
      @click="action"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    action: {
      type: Function,
      default: () => {}
    },
    buttonClass: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
};
</script>
