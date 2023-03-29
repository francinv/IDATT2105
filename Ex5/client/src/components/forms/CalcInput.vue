<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useStore } from "@/store"

const { firstNumber, secondNumber, isFirstNumberState } = storeToRefs(useStore())
const { calculateFromInput } = useStore()
</script>

<script lang="ts">
export default {}
</script>

<template>
  <input class="calc-input" type="text" :value="isFirstNumberState ? firstNumber : secondNumber" @change="(event) => calculateFromInput(event?.target?.value)" />
</template>
