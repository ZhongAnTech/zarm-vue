import Vue from 'vue';
import Loading from './src/loading';
import Directive from './src/directive';

/* istanbul ignore next */
Loading.install = function (Vue) { // eslint-disable-line
  Vue.component(Loading.name, Loading);
};

let instance;
const LoadingConstructor = Vue.extend(Loading);

const initInstance = () => {
  instance = new LoadingConstructor({
    el: document.createElement('div'),
  });
};

Loading.root = function () {
  /* istanbul ignore if */
  if (Vue.prototype.$isServer) return;

  if (!instance) {
    initInstance();
    instance.close = function () {
      instance.visible = false;
    };
  }

  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.visible = true;
  });
  return instance;
};

Loading.directive = Directive;

export default Loading;
