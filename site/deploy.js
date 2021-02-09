import { createApp } from 'vue';
import App from './app';
import zarmVue from '../release/lib/zarm-vue.common';
import router from './router';
import store from './store';
// eslint-disable-next-line import/first
import 'normalize.css';
// eslint-disable-next-line import/first
import 'highlight.js/styles/github-gist.css';
import '../release/zarm-vue.default.css';
import './styles/index.scss';

window.app = createApp(App);
window.app.use(zarmVue);
window.app.use(router);
window.app.use(store);

window.app.mount('#app');
