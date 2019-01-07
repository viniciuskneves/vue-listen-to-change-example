import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 'pending',
  },
  getters: {
    status: state => state.status,
  },
  mutations: {
    updateStatus(state, status) {
      Vue.set(state, 'status', status);
    },
  },
  actions: {
    async fetchApi({ commit }) {
      try {
        await api.get();

        commit('updateStatus', 'success');
      } catch (e) {
        console.error(e);

        commit('updateStatus', 'error');
      }
    },
  },
});
