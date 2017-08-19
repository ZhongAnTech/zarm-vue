import StackPicker from '../picker/src/stack-picker';

/* istanbul ignore next */
StackPicker.install = function (Vue) {
  Vue.component(StackPicker.name, StackPicker);
};

export default StackPicker;
