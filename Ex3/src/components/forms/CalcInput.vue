<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCalculatorStore } from "@/store";

const { firstNumber, secondNumber, isFirstNumberState } = storeToRefs(
  useCalculatorStore()
);
const { calculateFromInput } = useCalculatorStore();
</script>

<script lang="ts">
export default {};
</script>

<template>
  <input
    class="calc-input"
    type="text"
    :value="isFirstNumberState ? firstNumber : secondNumber"
    @change="(event) => calculateFromInput(event?.target?.value)"
  >
</template>
