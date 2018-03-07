import NewPicker from './src/new-picker';

/* istanbul ignore next */
NewPicker.install = function (Vue) {
  Vue.component(NewPicker.name, NewPicker);
};

export default NewPicker;
