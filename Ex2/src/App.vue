<script setup lang="ts">
import Calculator from "@/components/Calculator.vue";
import CalcLog from "@/components/CalcLog.vue";
</script>

<template>
  <header>
    <img
      alt="Calculator logo"
      class="logo"
      src="./assets/logo.png"
      width="125"
      height="125"
    />
    <h1>Kalkulator</h1>
    <p>En enkel kalkulator med design inspirasjon fra Apple.</p>
  </header>

  <main>
    <Calculator />
    <CalcLog />
  </main>
</template>
