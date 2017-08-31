import Vue from 'vue';
import isVNode from '@/utils/vdom';
import Alert from './src/alert';

/* istanbul ignore next */
Alert.install = function (Vue) { // eslint-disable-line
  Vue.component(Alert.name, Alert);
};

let instance;
const AlertConstructor = Vue.extend(Alert);

const initInstance = () => {
  instance = new AlertConstructor({
    el: document.createElement('div'),
  });
};

Alert.root = function (message, options) {
  /* istanbul ignore if */
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof message === 'object' && !isVNode(message)) {
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
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  } else {
    delete instance.$slots.default;
  }
  document.body.appendChild(instance.$el);
  instance.$off();
  instance.$on('close', (event) => {
    instance.callback && instance.callback.call(instance, event);
  });
  Vue.nextTick(() => {
    instance.currentVisible = true;
  });
};

export default Alert;
