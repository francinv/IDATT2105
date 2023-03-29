<script lang="ts">
import authClient from "@/server/auth"
import { ref } from "vue"

export default {
  setup() {
    const isLoggedIn = ref(false)

    const checkLogin = async () => {
      const res = await authClient.isTokenValid()
      isLoggedIn.value = res
    }

    checkLogin()
    return {
      isLoggedIn,
    }
  },
}
</script>

<template>
  <header>
    <img alt="Calculator logo" class="logo" src="@/assets/logo.png" width="100" height="100" />
    <nav>
      <ul>
        <li><router-link to="/" active-class="link-active" v-if="isLoggedIn">Hjem</router-link></li>
        <li><router-link to="/contact" active-class="link-active" v-if="isLoggedIn">Kontakt</router-link></li>
        <li><router-link to="/profile" active-class="link-active" v-if="isLoggedIn">Profil</router-link></li>
        <li><router-link to="/login" active-class="link-active" v-if="!isLoggedIn">Logg inn</router-link></li>
        <li><router-link to="/register" active-class="link-active" v-if="!isLoggedIn">Registrer deg</router-link></li>
      </ul>
    </nav>
  </header>
</template>
