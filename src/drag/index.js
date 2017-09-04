import Drag from './src/drag';

/* istanbul ignore next */
Drag.install = function (Vue) {
  Vue.component(Drag.name, Drag);
};

export default Drag;
