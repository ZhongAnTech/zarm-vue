import 'babel-polyfill';
import { createApp } from 'vue';
import zarmVue, { Icon } from '../release/lib/zarm-vue.common';
import App from './app';
import router from './router';
import '../release/zarm-vue.dark.css';
import './styles/pages/IndexPage.scss';

Icon.createSymbolIconfont('//at.alicdn.com/t/font_1340918_4p9b5skcr79.js');

const app = createApp(App);
app.use(router);
app.use(zarmVue);

app.mount('#app');
