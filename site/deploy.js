import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css';
import 'highlight.js/styles/github-gist.css';
import App from './app';
import zarmVue from '../release/lib/zarm-vue.common';
import router from './router';
import store from './store';
import './styles/themes/index.css';
import './styles/index.scss';

Vue.use(ElementUI);
Vue.use(zarmVue);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
