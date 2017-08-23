import NoticeBar from './src/notice-bar';

/* istanbul ignore next */
NoticeBar.install = function (Vue) {
  Vue.component(NoticeBar.name, NoticeBar);
};

export default NoticeBar;
