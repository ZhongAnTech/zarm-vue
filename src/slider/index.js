import Slider from './src/slider';

/* istanbul ignore next */
Slider.install = function (Vue) {
  Vue.component(Slider.name, Slider);
};

export default Slider;
