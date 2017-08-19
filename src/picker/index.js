import Picker from './src/picker';

/* istanbul ignore next */
Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker);
};

export default Picker;
