<template>
  <v-app>
    <v-main>
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
