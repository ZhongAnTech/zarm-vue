import 'normalize.css';
import 'highlight.js/styles/github-gist.css';
import Perfume from 'perfume.js';
import { createApp } from 'vue';
import App from './app';
import zarmVue from '../src/index';
import router from './router';
import store from './store';
import '../src/badge/style/index.scss';
import './styles/index.scss';

const perfume = new Perfume({
  analyticsTracker: (options) => {
    const { metricName, data, navigatorInformation } = options;
    switch (metricName) {
      case 'navigationTiming':
        if (data && data.timeToFirstByte) {
          console.log('navigationTiming', data);
        }
        break;
      case 'networkInformation':
        if (data && data.effectiveType) {
          console.log('networkInformation', data);
        }
        break;
      case 'fp':
        console.log('firstPaint', { duration: data });
        break;
      case 'fcp':
        console.log('firstContentfulPaint', { duration: data });
        break;
      case 'fid':
        console.log('firstInputDelay', { duration: data });
        break;
      case 'lcp':
        console.log('largestContentfulPaint', { duration: data });
        break;
      case 'lcpFinal':
        console.log('largestContentfulPaintFinal', { duration: data });
        break;
      case 'cls':
        console.log('cumulativeLayoutShift', { duration: data });
        break;
      case 'clsFinal':
        console.log('cumulativeLayoutShiftFinal', { duration: data });
        break;
      case 'tbt':
        console.log('totalBlockingTime', { duration: data });
        break;
      case 'tbt5S':
        console.log('totalBlockingTime5S', { duration: data });
        break;
      case 'tbt10S':
        console.log('totalBlockingTime10S', { duration: data });
        break;
      case 'tbtFinal':
        console.log('totalBlockingTimeFinal', { duration: data });
        break;
      default:
        console.log(metricName, { duration: data });
        break;
    }
  },
});

window.app = createApp(App);
window.app.use(zarmVue);
window.app.use(router);
window.app.use(store);

window.app.mount('#app');
