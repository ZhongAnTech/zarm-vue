import Pull from './src/pull';

/* istanbul ignore next */
Pull.install = function (Vue) {
  Vue.component(Pull.name, Pull);
};

export default Pull;
