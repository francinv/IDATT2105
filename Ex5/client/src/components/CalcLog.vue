<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useStore } from "@/store"

const { log } = storeToRefs(useStore())
</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      showLog: true,
    }
  },
  methods: {
    handleShow() {
      this.showLog = !this.showLog
    },
  },
})
</script>

<template>
  <div class="log">
    <div class="log-header">
      <h2>Logg over utførte kalkulasjoner</h2>
      <button class="log-btn" @click="handleShow">
        {{ showLog ? "Skjul 👀" : "Vis 👀" }}
      </button>
    </div>
    <ol v-if="showLog">
      <li v-for="element in log" :key="element">{{ element }}</li>
    </ol>
  </div>
</template>
