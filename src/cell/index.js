import Cell from './src/cell';

/* istanbul ignore next */
Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell);
};

export default Cell;
