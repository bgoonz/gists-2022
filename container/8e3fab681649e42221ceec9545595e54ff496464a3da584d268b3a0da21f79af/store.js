import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    }
  },
  getters: {
    counter: state => state.counter
  }
});
