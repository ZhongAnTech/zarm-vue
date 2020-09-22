import 'babel-polyfill';
import { createApp } from 'vue';
import zarmVue, { Icon } from '../src/index';
import App from './app';
import router from './router';
import '../styles/index.scss';
import './styles/pages/IndexPage.scss';

Icon.createSymbolIconfont('//at.alicdn.com/t/font_1340918_4p9b5skcr79.js');


const app = createApp(App);
// app.config.devtools = true;
app.use(router);
app.use(zarmVue);

app.mount('#app');
