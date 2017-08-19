import Column from '../picker/src/column';

/* istanbul ignore next */
Column.install = function (Vue) {
  Vue.component(Column.name, Column);
};

export default Column;
