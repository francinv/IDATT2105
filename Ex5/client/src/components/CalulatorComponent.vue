<script setup lang="ts">
import { CalcInput, CalculatorButton } from "@/components"
import { useStore } from "@/store"
import { storeToRefs } from "pinia"

const { showErrorMessage } = storeToRefs(useStore())
const { equals, negate, clear, divide, multiply, del, subtract, addition, decimal, setNumber } = useStore()
</script>

<template>
  <div class="calculator-container">
    <div>
      <CalcInput />
    </div>
    <div class="button-container">
      <CalculatorButton label="AC" :action="clear" class="dark-gray" />
      <CalculatorButton label="+/-" :action="negate" class="dark-gray" />
      <CalculatorButton label="DEL" :action="del" class="dark-gray" />
      <CalculatorButton label="÷" :action="divide" class="orange" />
      <CalculatorButton label="7" :action="() => setNumber(7)" class="light-gray" />
      <CalculatorButton label="8" :action="() => setNumber(8)" class="light-gray" />
      <CalculatorButton label="9" :action="() => setNumber(9)" class="light-gray" />
      <CalculatorButton label="x" :action="multiply" class="orange" />
      <CalculatorButton label="4" :action="() => setNumber(4)" class="light-gray" />
      <CalculatorButton label="5" :action="() => setNumber(5)" class="light-gray" />
      <CalculatorButton label="6" :action="() => setNumber(6)" class="light-gray" />
      <CalculatorButton label="-" :action="subtract" class="orange" />
      <CalculatorButton label="1" :action="() => setNumber(1)" class="light-gray" />
      <CalculatorButton label="2" :action="() => setNumber(2)" class="light-gray" />
      <CalculatorButton label="3" :action="() => setNumber(3)" class="light-gray" />
      <CalculatorButton label="+" :action="addition" class="orange" />
      <CalculatorButton label="0" :action="() => setNumber(0)" class="light-gray left radius-left" />
      <CalculatorButton label="," :action="decimal" class="light-gray right" />
      <CalculatorButton label="=" :action="equals" class="orange right-last radius-right" />
    </div>
    <div v-if="showErrorMessage" class="error">
      <h1>‼️</h1>
      <h3>Ser ut som det er bokstaver i feltet. Vennligst fjern og prøv på nytt.</h3>
    </div>
  </div>
</template>
