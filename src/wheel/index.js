import Wheel from './src/wheel';

/* istanbul ignore next */
Wheel.install = function (Vue) {
  Vue.component(Wheel.name, Wheel);
};

export default Wheel;
