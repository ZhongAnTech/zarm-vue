import Accordion from './src/accordion';

/* istanbul ignore next */
Accordion.install = function (Vue) {
  Vue.component(Accordion.name, Accordion);
};

export default Accordion;
