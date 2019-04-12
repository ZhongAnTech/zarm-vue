import TabPanel from '../tabs/src/tab-panel';

/* istanbul ignore next */
TabPanel.install = function (Vue) {
  Vue.component(TabPanel.name, TabPanel);
};

export default TabPanel;
