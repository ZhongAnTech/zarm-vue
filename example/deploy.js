import Vue from 'vue';
import zarmVue from '../lib/dist/zarm-vue.common';
import App from './app';
import router from './router';
import '../lib/zarm-vue.default.css';
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
