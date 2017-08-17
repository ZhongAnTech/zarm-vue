import Mask from './src/mask';

/* istanbul ignore next */
Mask.install = function (Vue) {
  Vue.component(Mask.name, Mask);
};

export default Mask;
