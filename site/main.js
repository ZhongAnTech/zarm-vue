import Vue from 'vue';
import App from './app';
import zarmVue from '../src/index';
import router from './router';
import './styles/index.scss';
import 'highlight.js/styles/github-gist.css';
import 'github-markdown-css'

Vue.use(zarmVue);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
