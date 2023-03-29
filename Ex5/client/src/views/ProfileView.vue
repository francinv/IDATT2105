<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { TopHeader } from "@/components"
import type { Operators } from "@/lib"
import { toOperatorString } from "@/utils"
import { authClient, apiClient } from "@/server"

export default defineComponent({
  components: { TopHeader },

  setup() {
    const calculations = ref([] as string[])
    const totalElements = ref(0)
    const totalPages = ref(0)
    const isFetching = ref(false)
    const isFailed = ref(false)
    const page = ref(0)
    const canGoBack = ref(false)
    const canGoForward = ref(false)

    const fetchCalculations = async () => {
      isFetching.value = true
      const response = await apiClient.getUserCalculationHistory({
        page: page.value,
        size: 10,
      })
      isFetching.value = false
      if (response.status === 200) {
        calculations.value = response.data.userCalculations.map(
          (calculation) => `${calculation.a} ${toOperatorString(calculation.calculationType as Operators)} ${calculation.b} = ${calculation.result}`
        )
        totalElements.value = response.data.total
        totalPages.value = response.data.totalPages
        canGoBack.value = page.value > 0
        canGoForward.value = page.value < totalPages.value - 1
      } else {
        isFailed.value = true
      }
    }

    const logOut = async () => {
      await authClient.logout()
    }

    const incrementPage = () => (page.value += 1)

    const decrementPage = () => (page.value -= 1)

    fetchCalculations()

    watch(page, () => {
      canGoBack.value = page.value > 0
      canGoForward.value = page.value < totalPages.value - 1
      console.log("watching page")
      fetchCalculations()
    })

    return {
      calculations,
      page,
      totalElements,
      totalPages,
      logOut,
      canGoBack,
      canGoForward,
      incrementPage,
      decrementPage,
    }
  },
})
</script>
<template>
  <TopHeader />
  <main>
    <div>
      <h1>Profil</h1>
    </div>
    <div class="log" style="color: white">
      <div class="log-header">
        <h2>Dine tidligere kalkulasjoner</h2>
      </div>
      <ol>
        <li v-for="element in calculations" :key="element">{{ element }}</li>
      </ol>
      <div style="display: flex; align-items: center; justify-content: flex-end">
        <button class="btn-left-rounded" :class="{ 'btn-paginated-disabled ': !canGoBack }" :disabled="!canGoBack" @click="decrementPage">👈🏾</button>
        <div style="padding: 6px">
          <h2>{{ page + 1 }} / {{ totalPages ? totalPages : 1 }}</h2>
        </div>
        <button class="btn-right-rounded" :class="{ 'btn-paginated-disabled': !canGoForward }" :disabled="!canGoForward" @click="incrementPage">👉🏾</button>
      </div>
    </div>
    <button class="btn-submit" @click="logOut" style="margin-left: auto">Logg ut</button>
  </main>
</template>
