import CarouselItem from '../carousel/src/carousel-item';

/* istanbul ignore next */
CarouselItem.install = function (Vue) {
  Vue.component(CarouselItem.name, CarouselItem);
};

export default CarouselItem;
