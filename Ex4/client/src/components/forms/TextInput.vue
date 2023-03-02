<template>
  <div class="form-input-container">
    <label v-if="label" :for="uuid">{{ label }}</label>
    <input
      v-bind="{ ...$attrs, onInput: updateValue}"
      :id="uuid"
      :name="name"
      class="base_input"
      :value="modelValue"
      :placeholder="label"
      :aria-describedby="error ? `${uuid}-error` : undefined"
      :aria-invalid="!!error"
    />
    <p v-if="error" :id="`${uuid}-error`" class="input-error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import {generateUUID, SetupFormComponent} from "@/utils";
import type {ComponentObjectPropsOptions} from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextInput",
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = generateUUID();

    return {
      updateValue,
      uuid
    };
  }
});
</script>
