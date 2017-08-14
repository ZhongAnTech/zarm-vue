// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import zarmVue from '../src/index';
import App from './app';
import router from './router';
import '../styles/index.scss'; // eslint-disable-line import/no-unresolved
import './styles/core/index.scss';
  // page styles
Vue.config.productionTip = false;
Vue.use(zarmVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
