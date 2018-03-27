import PickerView from './src/picker-view';

/* istanbul ignore next */
PickerView.install = function (Vue) {
  Vue.component(PickerView.name, PickerView);
};

export default PickerView;
