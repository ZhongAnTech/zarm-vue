import Panel from './src/panel';

/* istanbul ignore next */
Panel.install = function (Vue) {
  Vue.component(Panel.name, Panel);
};

export default Panel;
