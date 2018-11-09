import Vue from 'vue';
import App from './app';
import zarmVue from '../src/index';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss';
import 'highlight.js/styles/github-gist.css';
import 'github-markdown-css'
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
