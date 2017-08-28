import Vue from 'vue';
import Toast from './src/toast';

/* istanbul ignore next */
Toast.install = function (Vue) { // eslint-disable-line
  Vue.component(Toast.name, Toast);
};

let instance;
const ToastConstructor = Vue.extend(Toast);

const initInstance = () => {
  instance = new ToastConstructor({
    el: document.createElement('div'),
  });
};

Toast.root = function (message, options) {
  /* istanbul ignore if */
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof message === 'object') {
    options = message;
    message = '';
  } else {
    options.message = message;
  }
  if (!instance) {
    initInstance();
  }
  Object.keys(options).forEach(key => {
    instance[key] = options[key];
  });
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.currentVisible = true;
  });
};

export default Toast;
