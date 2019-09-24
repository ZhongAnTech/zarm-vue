import 'babel-polyfill';
import Vue from 'vue';
import zarmVue, { Icon } from '../src/index';
import App from './app';
import router from './router';
import '../styles/index.scss';
import './styles/pages/IndexPage.scss';

Vue.config.productionTip = false;

Icon.createSymbolIconfont('//at.alicdn.com/t/font_1340918_4p9b5skcr79.js');

Vue.use(zarmVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
