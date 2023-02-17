<template>
  <div class="form-input-container">
    <label for="text-area" class="text-area-label">{{ label }}</label>
    <textarea id="area" name="text-area" :rows="rows" :value="value" :placeholder="placeholder" @change="action" class="text-area"></textarea>
    <p class="input-error" v-if="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "TextArea",
  props: {
    label: String,
    value: String,
    rows: Number,
    placeholder: String,
    action: Function,
    error: String,
  },
};
</script>


