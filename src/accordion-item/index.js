import AccordionItem from '../accordion/src/accordionItem';

/* istanbul ignore next */
AccordionItem.install = function (Vue) {
  Vue.component(AccordionItem.name, AccordionItem);
};

export default AccordionItem;
