import Swipe from './src/swipe';

/* istanbul ignore next */
Swipe.install = function (Vue) {
  Vue.component(Swipe.name, Swipe);
};

export default Swipe;
