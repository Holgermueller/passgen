<template>
  <div>
    <v-tooltip v-model="show" right>
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-on:focus="$event.target.select()"
          :value="generatedPassword"
          ref="passwordToCopy"
          append-icon="mdi-clipboard"
          @click:append="
            copyToClipboard();
            showMessage();
          "
          readonly
          outlined
          class="centered-text"
          background-color="ivory"
          color="black"
          v-bind:append="attrs"
          v-on:append="on"
        >
        </v-text-field>
      </template>

      <span>Copied!</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "PasswordDisplay",

  data: () => ({
    show: false,
  }),

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

    showMessage() {
      return (this.show = !this.show);
    },
  },
};
</script>

<style scoped>
.centered-text >>> input {
  text-align: center;
}

.v-text-field--outlined >>> fieldset {
  border-color: black;
  border-width: 2px;
}

.v-input__icon--append .v-icon {
  color: purple;
}
</style>
