import { createVue, destroyVM } from '../util';
import { dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from '../touchs';

describe('Carousel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
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
    }, true);

    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-carousel')).to.true;
      expect(vm.$el.querySelector('.za-carousel-items').children.length).to.equal(3);
      vm.$destroy();
      done();
    });
  });

  it('loop', done => {
    vm = createVue({
      template: `
      <za-carousel
        loop
        direction='left'>
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
    }, true);
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.za-carousel-items').children.length)
        .to.equal(5);
      done();
    });
  });

  it('autoPlay', done => {
    vm = createVue({
      template: `
        <za-carousel
          :autoPlayIntervalTime='50'
          autoPlay
          direction='left'>
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
    }, true);

    setTimeout(() => {
      setTimeout(() => {
        const translate = vm.$el.querySelector('.za-carousel-items').style.transform;
        expect(translate).to.not.equal('translate3d(0px, 0px, 0px)');
        done();
      }, 60);
    }, 10);
  });

  it('mannul click', done => {
    let result;
    vm = createVue({
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
    }, true);
    const carousel = vm.$refs.carousel;
    carousel.onJumpTo(1);
    setTimeout(() => {
      expect(result).to.equal(1);
      expect(carousel.currentActiveIndex).to.equal(1);
      carousel.onSlideTo(2);
      setTimeout(() => {
        expect(result).to.equal(2);
        expect(carousel.currentActiveIndex).to.equal(2);
        done();
      }, 350);
    }, 60);
  });

  it('drag change', done => {
    vm = createVue({
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
    }, true);
    const wrapper = vm.$el.querySelector('.za-carousel-items');
    dispatchTouchStart(wrapper, {
      pageX: 50,
      pageY: 50,
    });
    dispatchTouchMove(wrapper, {
      pageX: -450,
      pageY: 50,
    });
    dispatchTouchEnd(wrapper, {
      pageX: -450,
      pageY: 50,
    });
    vm.$nextTick(() => {
      done();
    });
  });
});
