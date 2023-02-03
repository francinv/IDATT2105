<script setup lang="ts">
import CalcInput from "@/components/CalcInput.vue";
import CalcButton from "@/components/CalcButton.vue";
import { useCalculatorStore } from "@/calculator";
import { storeToRefs } from "pinia";

const { showErrorMessage } = storeToRefs(useCalculatorStore());
const {
  equals,
  negate,
  clear,
  divide,
  multiply,
  del,
  subtract,
  addition,
  decimal,
  setNumber,
} = useCalculatorStore();
</script>

<template>
  <div class="calculator-container">
    <div>
      <CalcInput />
    </div>
    <div class="button-container">
      <CalcButton label="AC" :action="clear" class="dark-gray" />
      <CalcButton label="+/-" :action="negate" class="dark-gray" />
      <CalcButton label="DEL" :action="del" class="dark-gray" />
      <CalcButton label="÷" :action="divide" class="orange" />
      <CalcButton label="7" :action="() => setNumber(7)" class="light-gray" />
      <CalcButton label="8" :action="() => setNumber(8)" class="light-gray" />
      <CalcButton label="9" :action="() => setNumber(9)" class="light-gray" />
      <CalcButton label="x" :action="multiply" class="orange" />
      <CalcButton label="4" :action="() => setNumber(4)" class="light-gray" />
      <CalcButton label="5" :action="() => setNumber(5)" class="light-gray" />
      <CalcButton label="6" :action="() => setNumber(6)" class="light-gray" />
      <CalcButton label="-" :action="subtract" class="orange" />
      <CalcButton label="1" :action="() => setNumber(1)" class="light-gray" />
      <CalcButton label="2" :action="() => setNumber(2)" class="light-gray" />
      <CalcButton label="3" :action="() => setNumber(3)" class="light-gray" />
      <CalcButton label="+" :action="addition" class="orange" />
      <CalcButton
        label="0"
        :action="() => setNumber(0)"
        class="light-gray left radius-left"
      />
      <CalcButton label="," :action="decimal" class="light-gray right" />
      <CalcButton
        label="="
        :action="equals"
        class="orange right-last radius-right"
      />
    </div>
    <div class="error" :class="showErrorMessage">
      <h1>‼️</h1>
      <h3>
        Ser ut som det er bokstaver i feltet. Vennligst fjern og prøv på nytt.
      </h3>
    </div>
  </div>
</template>
