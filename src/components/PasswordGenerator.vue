<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card class="password-card" width="500">
          <v-card-title> Random Password Generator </v-card-title>

          <v-card-text>
            <PasswordDisplay />

            <v-form>
              <v-text-field
                label="Length of characters"
                type="number"
                v-model="length"
                outlined
              >
              </v-text-field>
              <v-switch v-model="hasNumbers" label="Has Numbers?"></v-switch>
              <v-switch v-model="hasSymbols" label="Has Symbols?"></v-switch>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn
              @click.prevent="generatePassword"
              :disabled="tooFewChars"
              elevation="0"
              dark
              block
              color="primary"
            >
              Generate!
            </v-btn>
          </v-card-actions>

          <v-card-actions>
            <h6 class="copy">&copy; 2021 Holger Mueller</h6>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PasswordDisplay from "./GeneratorComponents/PasswordDisplay.vue";

export default {
  name: "PasswordGenerator",

  components: {
    PasswordDisplay,
  },

  data: () => ({
    length: 8,
    hasNumbers: true,
    hasSymbols: true,
  }),

  computed: {
    tooFewChars() {
      return (
        this.length <= 6 || this.length == null || this.length == undefined
      );
    },
  },

  methods: {
    generatePassword() {
      this.$store.dispatch("generatePassword", {
        length: this.length,
        hasNumbers: this.hasNumbers,
        hasSymbols: this.hasSymbols,
      });
    },
  },
};
</script>

<style scoped>
.password-card {
  margin: 7% auto;
}

.copy {
  margin: auto;
}
</style>
