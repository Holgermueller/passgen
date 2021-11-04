<template>
  <v-app>
    <v-main class="main-background">
      <PasswordGenerator />
    </v-main>
  </v-app>
</template>

<script>
import PasswordGenerator from "./components/PasswordGenerator";

export default {
  name: "App",

  components: {
    PasswordGenerator,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.main-background {
  background-color: #000080;
}
</style>
