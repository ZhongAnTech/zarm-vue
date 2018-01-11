import Vue from 'vue';
import Tooltip from './src/tooltip';

/* istanbul ignore next */
Tooltip.install = function (Vue) { // eslint-disable-line
  Vue.component(Tooltip.name, Tooltip);
};

let instance;
const TooltipConstructor = Vue.extend(Tooltip);

const initInstance = () => {
  instance = new TooltipConstructor({
    el: document.createElement('div'),
  });
};

Tooltip.root = function (message, options) {
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
  return instance;
};

export default Tooltip;

