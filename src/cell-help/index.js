import CellHelp from '../cell/src/cell-help';

/* istanbul ignore next */
CellHelp.install = function (Vue) {
  Vue.component(CellHelp.name, CellHelp);
};

export default CellHelp;
