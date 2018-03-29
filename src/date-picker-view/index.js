import DatePickerView from './src/date-picker-view';

/* istanbul ignore next */
DatePickerView.install = function (Vue) {
  Vue.component(DatePickerView.name, DatePickerView);
};

export default DatePickerView;
