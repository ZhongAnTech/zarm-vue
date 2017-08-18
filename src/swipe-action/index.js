import SwipeAction from './src/swipe-action';

/* istanbul ignore next */
SwipeAction.install = function (Vue) {
  Vue.component(SwipeAction.name, SwipeAction);
};

export default SwipeAction;
