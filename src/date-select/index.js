import DatePicker from '../date-picker/src/date-picker';

const DateSelect = Object.assign({}, DatePicker);
DateSelect.name = 'zaDateSelect';
/* istanbul ignore next */
DateSelect.install = function (Vue) {
  Vue.component(DateSelect.name, DateSelect);
};

export default DateSelect;
