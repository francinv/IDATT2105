/**
 * This function is used to handle update of a field.
 *
 * Borrowed from Vue Mastery course: https://github.com/Code-Pop/validating-vue3-forms/blob/lesson5/end/src/features/SetupFormComponent.js
 */
import type { ExtractPropTypes } from "vue";

export default function SetupFormComponent(
  props: ExtractPropTypes<{
    label: { type: StringConstructor; default: string };
    error: { type: StringConstructor; default: string };
    modelValue: {
      type: (StringConstructor | NumberConstructor)[];
      default: string;
    };
    name: {};
  }>,
  { emit }: { emit: (event: string, ...args: any[]) => void }
) {
  const updateValue = (event: any) => {
    const val = event.target.value;

    emit("update:modelValue", val);
  };

  return {
    updateValue,
  };
}
