import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: [
      {
        firstName: "George",
        lastName: "Michael",
        email: "george.michael@gmail.com",
      },
      {
        firstName: "Lara",
        lastName: "Diaz",
        email: "l.diaz@gmail.com",
      },
    ],
  },
  mutations: {
    newAccount(state, payload) {
      state.accounts.push(payload);
    },
  },
  actions: {},
  modules: {},
});
