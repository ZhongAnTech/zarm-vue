import { createStore } from 'vuex';
import packageJson from '../../package.json';

const store = createStore({
  state: {
    activeName: 'quick-start',
    lang: 'ZH',
    version: '3.0.0',
    versionList: [{
      value: '3.0.0',
      label: packageJson.version,
      path: '#/documents/quick-start',
    }],
  },
  actions: {
    setVersion(context, payload) {
      context.commit('updateVersion', payload);
    },
    setActiveName(context, payload) {
      context.commit('updateActive', payload);
    },
  },
  mutations: {
    updateVersion(state, data) {
      state.version = data;
    },
    updateActive(state, data) {
      state.activeName = data;
    },
  },
});

export default store;
