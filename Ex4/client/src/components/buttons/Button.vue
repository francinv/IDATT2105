<template>
  <div class="btn-container">
    <button
      :type="type"
      :class="[buttonClass, {'btn-disabled': disabled}]"
      :disabled="disabled"
      @click="(e: MouseEvent) => {action(e); return e;}"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">

export type ButtonType = 'submit' | 'reset' | 'button' | undefined;

export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String as () => ButtonType,
      default: 'button',
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
