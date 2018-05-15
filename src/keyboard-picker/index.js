import KeyboardPicker from './src/keyboard-picker';

/* istanbul ignore next */
KeyboardPicker.install = function (Vue) {
  Vue.component(KeyboardPicker.name, KeyboardPicker);
};

export default KeyboardPicker;
