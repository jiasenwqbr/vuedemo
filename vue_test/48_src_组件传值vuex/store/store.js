// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sharedData: null,
  },
  mutations: {
    setSharedData(state, data) {
      state.sharedData = data;
    },
  },
  actions: {
    updateSharedData({ commit }, data) {
      commit("setSharedData", data);
    },
  },
});
