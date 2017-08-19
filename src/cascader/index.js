import Cascader from '../picker/src/cascader';

/* istanbul ignore next */
Cascader.install = function (Vue) {
  Vue.component(Cascader.name, Cascader);
};

export default Cascader;
