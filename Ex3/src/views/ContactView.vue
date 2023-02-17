<script lang="ts">
import { BaseButton, TextInput, TextArea } from "@/components";
import { useField, useForm } from "vee-validate";
import contactSchema from "@/schemas";


export default {
  components: {BaseButton, TextArea, TextInput},
  setup() {
    const { handleSubmit, errors, resetField } = useForm({
      validationSchema: contactSchema
    });

    const {value: name} = useField("name"); // Saved in state ??
    const {value: email} = useField("email"); // Saved in state ??
    const {value: message} = useField("message");

    const submit = handleSubmit((values) => {
      console.log(values);
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
      isValid
    };
  }
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
      <TextInput v-model="name" label="Navn" placeholder="Ditt navn" type="text" :error="errors.name" />
      <TextInput v-model="email" label="E-post" placeholder="Din e-post" type="email" :error="errors.email" />
      <TextArea v-model="message" label="Din melding" placeholder="Skriv din melding her" rows="5" :error="errors.message" />
      <BaseButton type="submit" label="Send" button-class="btn-submit" :disabled="!isValid()"/>
    </form>
  </main>
</template>

