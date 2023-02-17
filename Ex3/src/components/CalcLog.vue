<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCalculatorStore } from "@/store";

const { log } = storeToRefs(useCalculatorStore());
</script>

<script lang="ts">
export default {
  data: function () {
    return {
      showLogClass: "show",
      showLog: true,
    };
  },
  methods: {
    handleShow: function () {
      this.showLogClass = this.showLog ? "hide" : "show";
      this.showLog = !this.showLog;
    },
  },
};
</script>

<template>
  <div class="log">
    <div class="log-header">
      <h2>Logg over utførte kalkulasjoner</h2>
      <button class="log-btn" @click="handleShow">
        {{ showLog ? "Skjul 👀" : "Vis 👀" }}
      </button>
    </div>
    <ol :class="showLogClass">
      <li v-for="element in log" v-bind:key="element">{{ element }}</li>
    </ol>
  </div>
</template>
