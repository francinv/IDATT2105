/**
 * This function is used to handle update of a field.
 *
 * Borrowed from Vue Mastery course: https://github.com/Code-Pop/validating-vue3-forms/blob/lesson5/end/src/features/SetupFormComponent.js
 */
import type { ComponentObjectPropsOptions } from "vue"

export default function SetupFormComponent(props: ComponentObjectPropsOptions, { emit }: { emit: (event: string, ...args: any[]) => void }) {
  const updateValue = (event: any) => {
    const val = event.target.value

    emit("update:modelValue", val)
  }

  return {
    updateValue,
  }
}
