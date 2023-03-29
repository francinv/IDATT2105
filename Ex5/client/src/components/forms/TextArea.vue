<template>
  <div class="form-input-container">
    <label v-if="label" :for="uuid">{{ label }}</label>
    <textarea
      class="text-area"
      v-bind="{ ...$attrs, onInput: updateValue }"
      :id="uuid"
      :value="modelValue"
      :placeholder="label"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="!!error"
      :name="name"
    />
    <p class="input-error" v-if="error" :id="`${uuid}-error`">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import type { ComponentObjectPropsOptions } from "vue"
import { generateUUID, SetupFormComponent } from "@/utils"

export default {
  name: "TextArea",
  props: {
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },

  setup(props: ComponentObjectPropsOptions, context: any) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid = generateUUID()

    return {
      updateValue,
      uuid,
    }
  },
}
</script>
