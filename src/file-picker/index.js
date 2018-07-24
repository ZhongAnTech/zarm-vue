import FilePicker from './src/filePicker';

/* istanbul ignore next */
FilePicker.install = function (Vue) {
  Vue.component(FilePicker.name, FilePicker);
};

export default FilePicker;
