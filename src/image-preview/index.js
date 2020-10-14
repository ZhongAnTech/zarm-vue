import ImagePreview from './src/image-preview';

/* istanbul ignore next */
ImagePreview.install = function (Vue) {
  Vue.component(ImagePreview.name, ImagePreview);
};

export default ImagePreview;
