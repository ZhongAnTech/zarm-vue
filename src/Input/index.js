import Input from './src/input';

/* istanbul ignore next */
Input.install = function (Vue) {
  Vue.component(Input.name, Input);
};

export default Input;
