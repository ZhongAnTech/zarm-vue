import ColumnGroup from '../picker/src/column-group';

/* istanbul ignore next */
ColumnGroup.install = function (Vue) {
  Vue.component(ColumnGroup.name, ColumnGroup);
};

export default ColumnGroup;
