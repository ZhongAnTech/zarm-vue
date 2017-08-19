import DatePicker from '../picker/src/date-picker';

/* istanbul ignore next */
DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
