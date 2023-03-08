<template>
  <div class="form-input-container">
    <label v-if="label" :for="uuid">{{ label }}</label>
    <input
      :name="name"
      class="base_input"
      v-bind="{ ...$attrs, onInput: updateValue}"
      :id="uuid"
      :value="modelValue"
      :placeholder="label"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="!!error"
    />
    <p class="input-error" v-if="error" :id="`${uuid}-error`">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import {generateUUID, SetupFormComponent} from "@/utils";
import type {ComponentObjectPropsOptions} from "vue";

export default {
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
  setup (props: ComponentObjectPropsOptions, context: any) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = generateUUID();

    return {
      updateValue,
      uuid
    };
  }
};
</script>
