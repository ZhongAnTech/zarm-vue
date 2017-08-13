// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import zarm from '../src/index';
import App from './app';
import '../styles/index.scss'; // eslint-disable-line import/no-unresolved

Vue.config.productionTip = false;
Vue.use(zarm);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
