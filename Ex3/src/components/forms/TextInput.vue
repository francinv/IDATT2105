<template>
  <div class="form-input-container">
    <label for="input" class="input-label">{{ label }}</label>
    <input
      name="input"
      class="base_input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @change="action"
    />
    <p class="input-error" v-if="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "TextInput",
  props: {
    label: String,
    value: String,
    type: String,
    placeholder: String,
    error: String,
    action: Function,
  },
};
</script>
