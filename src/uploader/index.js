import Uploader from './src/uploader';

/* istanbul ignore next */
Uploader.install = function (Vue) {
  Vue.component(Uploader.name, Uploader);
};

export default Uploader;
