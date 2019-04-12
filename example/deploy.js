import 'babel-polyfill';
import Vue from 'vue';
import zarmVue from '../release/lib/zarm-vue.common';
import App from './app';
import router from './router';
import '../release/zarm-vue.default.css';
import './styles/pages/IndexPage.scss';

Vue.config.productionTip = false;
Vue.use(zarmVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
