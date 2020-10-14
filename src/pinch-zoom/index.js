import PinchZoom from './src/pinch-zoom';

/* istanbul ignore next */
PinchZoom.install = function (Vue) {
  Vue.component(PinchZoom.name, PinchZoom);
};

export default PinchZoom;
