<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card class="password-card" width="500">
          <v-card-title> Random Password Generator </v-card-title>

          <v-card-text>
            <PasswordDisplay />

            <v-form>
              <h2>Length</h2>
              <v-text-field type="number" v-model="customLength">
              </v-text-field>
              <h2>Numbers?</h2>
              <h2>Symbols?</h2>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn @click.prevent="generatePassword" elevation="0" dark block>
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
    customLength: 8,
    hasNumbers: true,
    hasSymbols: true,
  }),

  methods: {
    generatePassword() {
      console.log(this.customLength);
      this.$store.dispatch("generatePassword", {
        customLength: this.customLength,
      });
    },
  },
};
</script>

<style scoped>
.password-card {
  margin: 15% auto;
}

.copy {
  margin: auto;
}
</style>
