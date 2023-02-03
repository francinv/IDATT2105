<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCalculatorStore } from "@/calculator";

const { firstNumber, secondNumber, isFirstNumberState } = storeToRefs(
  useCalculatorStore()
);
const { calculateFromInput } = useCalculatorStore();
</script>

<script lang="ts"></script>

<template>
  <input
    class="calc-input"
    type="text"
    @change="(event) => calculateFromInput(event.target.value)"
    :value="isFirstNumberState ? firstNumber : secondNumber"
  />
</template>
