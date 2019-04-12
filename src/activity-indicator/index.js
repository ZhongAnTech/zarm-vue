import ActivityIndicator from './src/activityIndicator';

/* istanbul ignore next */
ActivityIndicator.install = function (Vue) {
  Vue.component(ActivityIndicator.name, ActivityIndicator);
};

export default ActivityIndicator;
