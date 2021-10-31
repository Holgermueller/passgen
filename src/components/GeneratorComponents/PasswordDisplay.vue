<template>
  <div class="password-display">
    <h2>
      {{ generatedPassword }}
    </h2>
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
};
</script>

<style scoped>
.password-display {
  border: 2px solid black;
  border-radius: 15px;
  margin: 2px auto 8px;
  height: 44px;
}
</style>
