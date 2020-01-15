import Popper from './src/popper';
/* istanbul ignore next */
Popper.install = function (Vue) {
  Vue.component(Popper.name, Popper);
};
export default Popper;
