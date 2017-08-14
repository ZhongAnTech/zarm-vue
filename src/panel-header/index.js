import PanelHeader from '../panel/src/panel-header';

/* istanbul ignore next */
PanelHeader.install = function (Vue) {
  Vue.component(PanelHeader.name, PanelHeader);
};

export default PanelHeader;
