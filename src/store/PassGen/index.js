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
      let length = payload.length;

      let hasNumbers = payload.hasNumbers;
      let hasSymbols = payload.hasSymbols;

      let chars = alpha;

      hasNumbers ? (chars += numbers) : "";
      hasSymbols ? (chars += symbols) : "";

      let newPassword = "";

      for (let i = 0; i < length; i++) {
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
