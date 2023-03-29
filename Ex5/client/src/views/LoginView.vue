<script lang="ts">
import { BaseButton, TextInput, TopHeader } from "@/components"
import { useField, useForm } from "vee-validate"
import { authSchema } from "@/schemas"
import { ref } from "vue"
import { authClient } from "@/server"

export default {
  components: { TopHeader, BaseButton, TextInput },
  setup() {
    const { handleSubmit, errors } = useForm({
      validationSchema: authSchema,
    })

    const { value: username } = useField("username")
    const { value: password } = useField("password")

    const isLoading = ref(false)
    const isSuccessful = ref(false)
    const isFailed = ref(false)

    const submit = handleSubmit(async (values) => {
      isLoading.value = true
      const res = await authClient.login({
        username: values.username,
        password: values.password,
      })
      isLoading.value = false
      if (res.status === 200) {
        isSuccessful.value = true
      } else {
        isFailed.value = true
      }
    })

    const isValid = () => {
      return Object.keys(errors.value).length === 0
    }

    return {
      username,
      password,
      submit,
      errors,
      isValid,
      isLoading,
      isSuccessful,
      isFailed,
    }
  },
}
</script>

<template>
  <TopHeader />
  <main>
    <form class="contact-form" @submit.prevent="submit">
      <TextInput v-model="username" label="Brukernavn" placeholder="Ditt brukernavn" type="text" :error="errors.username" name="username" />
      <TextInput v-model="password" label="Passord" placeholder="Skriv inn passord" type="password" :error="errors.passwor" name="password" />
      <BaseButton type="submit" :label="isLoading ? 'Oppdaterer' : 'Logg inn'" button-class="btn-submit" :disabled="!isValid()" />
      <div v-if="isSuccessful" class="success-message">
        <h1 style="margin-right: 0.5rem">✅</h1>
        <p>Takk for din tilbakemelding!</p>
      </div>
      <div v-if="isFailed" class="error-message">
        <div style="margin-right: 0.5rem">
          <h1>‼️</h1>
        </div>
        <p>Det oppstod en feil under sending av meldingen.</p>
      </div>
    </form>
  </main>
</template>
