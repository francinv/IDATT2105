<script lang="ts">
import TextInput from "@/components/forms/TextInput.vue";
import TextArea from "@/components/forms/TextArea.vue";
import Button from "@/components/buttons/Button.vue";
import { useField, useForm } from "vee-validate";
import contactSchema from "@/schemas";


export default {
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
  },
  components: {Button, TextArea, TextInput}
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
      <TextInput label="Navn" placeholder="Ditt navn" type="text" :error="errors.name" v-model="name" />
      <TextInput label="E-post" placeholder="Din e-post" type="email" :error="errors.email" v-model="email" />
      <TextArea label="Din melding" placeholder="Skriv din melding her" rows="5" :error="errors.message" v-model="message" />
      <Button type="submit" label="Send" buttonClass="btn-submit" :disabled="!isValid()"/>
    </form>
  </main>
</template>

