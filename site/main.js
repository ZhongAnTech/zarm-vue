import { createApp } from 'vue';
import App from './app';
import zarmVue from '../src/index';
import router from './router';
import store from './store';
// eslint-disable-next-line import/first
import 'normalize.css';
// eslint-disable-next-line import/first
import 'highlight.js/styles/github-gist.css';
import '../src/badge/style/index.scss';
import './styles/index.scss';

window.app = createApp(App);
window.app.use(zarmVue);
window.app.use(router);
window.app.use(store);

window.app.mount('#app');
