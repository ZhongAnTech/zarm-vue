import Toast from './src/toast';

/* istanbul ignore next */
Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast);
};

export default Toast;
