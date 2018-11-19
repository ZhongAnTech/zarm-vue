import Vue from 'vue';
import Vuex from 'vuex';
import middlewares from './middle-wares';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict: debug,
  plugins: middlewares,
  state: {
    activeName: 'quick-start',
    lang: 'ZH',
    version: '2.0.0',
    versionList: [{
      value: '2.0.0',
      label: '2.0.0'
    }]
  },
  actions: {
    setVersion (context, payload) {
      context.commit('updateVersion', payload)
    },
    setActiveName (context, payload) {
      context.commit('updateActive', payload)
    }
  },
  mutations: {
    updateVersion (state, data) {
      state.version = data
    },
    updateActive (state, data) {
      state.activeName = data
    }
  }
});

export default store;
