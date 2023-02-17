<script lang="ts">
import TextInput from "@/components/forms/TextInput.vue";
import TextArea from "@/components/forms/TextArea.vue";
import Button from "@/components/buttons/Button.vue";

export default {
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
    <form class="contact-form">
      <TextInput label="Navn" placeholder="Ditt navn" type="text" />
      <TextInput label="E-post" placeholder="Din e-post" type="email"/>
      <TextArea label="Din melding" placeholder="Skriv din melding her" rows="5" />
      <Button type="submit" label="Send" buttonClass="btn-submit" />
    </form>
  </main>
</template>

