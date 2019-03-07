import zaCarousel from '@/carousel';
import zaCarouselItem from '@/carousel-item';
import { mount, triggerDrag } from '../util';

describe('Carousel', () => {
  it('create', done => {
    const TestCompo = {
      components: {
        zaCarousel,
        zaCarouselItem,
      },
      template: `
        <za-carousel direction='left'>
          <za-carousel-item>
            <div>carousel1</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel2</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel3</div>
          </za-carousel-item>
        </za-carousel>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-carousel')).toBe(true);
      expect(vm.$el.querySelector('.za-carousel__items').children.length).toEqual(3);
      vm.$destroy();
      done();
    });
  });

  it('loop', done => {
    const TestCompo = {
      components: {
        zaCarousel,
        zaCarouselItem,
      },
      template: `
        <za-carousel loop direction='left'>
          <za-carousel-item>
            <div>carousel1</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel2</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel3</div>
          </za-carousel-item>
        </za-carousel>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.za-carousel__items').children.length).toEqual(5);
      done();
    });
  });

  it('autoPlay', done => {
    const TestCompo = {
      components: {
        zaCarousel,
        zaCarouselItem,
      },
      template: `
        <za-carousel :autoPlayIntervalTime='50' autoPlay direction='left'>
          <za-carousel-item>
            <div>carousel1</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel2</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel3</div>
          </za-carousel-item>
        </za-carousel>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    setTimeout(() => {
      setTimeout(() => {
        const translate = vm.$el.querySelector('.za-carousel__items').style.transform;
        expect(translate).not.toEqual('translate3d(0px, 0px, 0px)');
        done();
      }, 60);
    }, 10);
  });

  it('mannul click', done => {
    let result;
    const TestCompo = {
      components: {
        zaCarousel,
        zaCarouselItem,
      },
      template: `
        <za-carousel
          ref='carousel'
          direction='left'
          :autoPlayIntervalTime='50'
          @change='handleChange'
          @changeStart='handleChangeStart'
          @changeEnd='handleChangeEnd'>
          <za-carousel-item>
            <div>carousel1</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel2</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel3</div>
          </za-carousel-item>
        </za-carousel>
      `,
      methods: {
        handleChange(index) {
          result = index;
        },
        handleChangeStart(index) {
          result = index;
        },
        handleChangeEnd(index) {
          result = index;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const carousel = vm.$refs.carousel;
    carousel.onJumpTo(1);
    setTimeout(() => {
      expect(result).toEqual(1);
      expect(carousel.currentActiveIndex).toEqual(1);
      carousel.onSlideTo(2);
      setTimeout(() => {
        expect(carousel.currentActiveIndex).toEqual(2);
        done();
      }, 350);
    }, 60);
  });

  it('drag change', done => {
    const TestCompo = {
      components: {
        zaCarousel,
        zaCarouselItem,
      },
      template: `
        <za-carousel direction='left'>
          <za-carousel-item>
            <div>carousel1</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel2</div>
          </za-carousel-item>
          <za-carousel-item>
            <div>carousel3</div>
          </za-carousel-item>
        </za-carousel>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const el = vm.$el.querySelector('.za-carousel__items');
    triggerDrag(el, 50, 50);
    triggerDrag(el, -450, 50);
    vm.$nextTick(() => {
      done();
    });
  });
});
