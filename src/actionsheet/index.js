import ActionSheet from './src/actionsheet';

/* istanbul ignore next */
ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet);
};

export default ActionSheet;
