import Picker from './src/new-picker';

/* istanbul ignore next */
Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker);
};

export default Picker;
