import Vue from "vue";
import Vuex from "vuex";

import PassGen from "./PassGen";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    PassGen,
  },
});
