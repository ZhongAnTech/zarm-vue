import Picker from '../picker/src/picker';

const Select = Object.assign({}, Picker);
Select.name = 'za-select';
/* istanbul ignore next */
Select.install = function (Vue) {
  Vue.component(Select.name, Select);
};

export default Select;
