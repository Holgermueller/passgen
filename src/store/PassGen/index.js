export default {
  state: {
    password: "password here",
  },

  mutations: {
    // CLEAR_PASSWORD(state) {
    //   state.password = "";
    // },

    SET_PASSWORD(state, payload) {
      state.password = payload;
    },
  },

  actions: {
    generatePassword({ commit }, payload) {
      let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let numbers = "0123456789";
      let symbols = "!@#$%^&*_-+=";
      let defaultLength = 8;
      let customLength = payload.customLength;
      let lengthToUse = 8;
      let hasCustomLength;
      let hasNumbers = true;
      let hasSymbols = true;

      let chars = alpha;

      hasCustomLength > 8
        ? (lengthToUse = customLength)
        : (lengthToUse = defaultLength);

      hasNumbers ? (chars += numbers) : "";
      hasSymbols ? (chars += symbols) : "";

      let newPassword = "";

      for (let i = 0; i < lengthToUse; i++) {
        newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      commit("SET_PASSWORD", newPassword);
    },
  },

  getters: {
    password(state) {
      return state.password;
    },
  },
};
