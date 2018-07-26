import CollapseItem from '../collapse/src/collapseItem';

/* istanbul ignore next */
CollapseItem.install = function (Vue) {
  Vue.component(CollapseItem.name, CollapseItem);
};

export default CollapseItem;
