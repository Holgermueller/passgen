<template>
  <div>
    <v-text-field
      v-on:focus="$event.target.select()"
      :value="generatedPassword"
      ref="passwordToCopy"
      append-icon="mdi-clipboard"
      @click:append="copyToClipboard"
      readonly
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "PasswordDisplay",

  computed: {
    generatedPassword() {
      return this.$store.getters.password;
    },
  },

  methods: {
    copyToClipboard() {
      this.$refs.passwordToCopy.focus();
      document.execCommand("copy");
    },
  },
};
</script>

<style scoped>
.password-display {
  border: 1px solid black;
  border-radius: 15px;
  margin: 2px auto 8px;
  height: 44px;
}
</style>
