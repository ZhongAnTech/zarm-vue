// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
// import zarmVue from '../src/index';
import zarmVue from '../lib/dist/zarm-vue.common';
// import zarmVue from 'zarm-vue';
import App from './app';
import router from './router';
// import '../styles/index.scss';
// import 'zarm-vue/zarm-vue.default.css';
import '../lib/zarm-vue.default.css';


 // page styles
import './styles/core/index.scss';
Vue.config.productionTip = false;
Vue.use(zarmVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
