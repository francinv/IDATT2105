<script lang="ts">
import { BaseButton, TextInput, TextArea } from "@/components";
import { useField, useForm } from "vee-validate";
import contactSchema from "@/schemas";
import Client from "@/server/client";
import { BASE_URL } from "@/constants";
import { ref } from "vue";


export default {
  components: {BaseButton, TextArea, TextInput},
  setup() {
    const { handleSubmit, errors, resetField } = useForm({
      validationSchema: contactSchema
    });

    const {value: name} = useField("name"); // Saved in state ??
    const {value: email} = useField("email"); // Saved in state ??
    const {value: message} = useField("message");

    const isLoading = ref(false);
    const isSuccessful = ref(false);
    const isFailed = ref(false);
    const apiError = ref("");

    const client = new Client(BASE_URL);

    const submit = handleSubmit(async (values) => {
      isLoading.value = true;
      const res = await client.getInstance().addContactForm(values);
      isLoading.value = false;
      if (res.status === 200 || res.status === 201) {
        isSuccessful.value = true;
      } else {
        isFailed.value = true;
        apiError.value = res.data.message;
      }
      resetField("message");
    });

    const isValid = () => {
      return Object.keys(errors.value).length === 0;
    };

    return {
      name,
      email,
      message,
      submit,
      errors,
      isValid,
      isLoading,
      isSuccessful,
      isFailed,
      apiError
    };
  },
};
</script>

<template>
  <header>
    <img
        alt="Calculator logo"
        class="logo"
        src="@/assets/logo.png"
        width="125"
        height="125"
    />
    <h1>Kontakt oss</h1>
    <p>Gi tilbakemelding til kalkulatoren her.</p>
  </header>
  <main>
    <form class="contact-form" @submit.prevent="submit">
      <TextInput v-model="name" label="Navn" placeholder="Ditt navn" type="text" :error="errors.name" name="name" />
      <TextInput v-model="email" label="E-post" placeholder="Din e-post" type="email" :error="errors.email" name="email" />
      <TextArea v-model="message" label="Din melding" placeholder="Skriv din melding her" rows="5" :error="errors.message" name="message" />
      <BaseButton type="submit" :label="isLoading ? 'Oppdaterer' : 'Send'" button-class="btn-submit" :disabled="!isValid()"/>
      <div v-if="isSuccessful" class="success-message">
        <h1 style="margin-right: 0.5rem">✅</h1>
        <p>Takk for din tilbakemelding!</p>
      </div>
      <div v-if="isFailed" class="error-message">
        <div style="margin-right: 0.5rem">
          <h1>‼️</h1>
        </div>
        <div>
          <p>Det oppstod en feil under sending av meldingen.</p>
          <p>Feilmelding fra server: {{ apiError }}</p>
        </div>
      </div>
    </form>
  </main>
</template>

