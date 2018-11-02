import Vue from 'vue';
import App from './app';
import router from './router';
import '../styles/index.scss';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
