import SwipeItem from '../swipe/src/swipe-item';

/* istanbul ignore next */
SwipeItem.install = function (Vue) {
  Vue.component(SwipeItem.name, SwipeItem);
};

export default SwipeItem;
