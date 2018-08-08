import zaSlider from '@/slider';
import { mount } from '../util';
import { dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from '../touchs';

describe('Slider', () => {

  it('create', done => {
    const TestCompo = {
      components: {
        zaSlider
      },
      template: `
        <za-slider
        :value='0'
        ></za-slider>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-slider')).toBe(true);
      done();
    });
  });

  it('slider shadow position', done => {
    const wrapper = mount(zaSlider, {
      propsData: {
        prefixCls: 'za-slider',
      },
    });
    const { vm } = wrapper;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      vm.$el.click();
      done();
    });
  });

  it('change value', done => {
    const TestCompo = {
      components: {
        zaSlider
      },
      template: `
        <za-slider
        ref='slider'
        @change='handleChange'
        ></za-slider>
      `,
      methods: {
        handleChange(ev, v) {
          console.log(v); // eslint-disable-line
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-slider')).toBe(true);
      vm.value = 10;
      done();
    });
  });

  it('drag', done => {
    let result;
    const TestCompo = {
      components: {
        zaSlider
      },
      template: `
        <za-slider
        ref='slider'
        @change='handleChange'
        ></za-slider>
      `,
      methods: {
        handleChange(ev, v) {
          result = v;
        },
      },
    };
    const { vm } = mount(TestCompo);
    const wrapper = vm.$el.querySelector('.za-slider-handle');
    dispatchTouchStart(wrapper, {
      pageX: 50,
      pageY: 50,
    });
    dispatchTouchMove(wrapper, {
      pageX: 150,
      pageY: 50,
    });
    dispatchTouchEnd(wrapper, {
      pageX: 150,
      pageY: 50,
    });
    vm.$nextTick(() => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it('drag min offset', done => {
    let result;
    const TestCompo = {
      components: {
        zaSlider
      },
      template: `
        <za-slider
        ref='slider'
        @change='handleChange'
        ></za-slider>
      `,
      methods: {
        handleChange(ev, v) {
          result = v;
        },
      },
    };
    const { vm } = mount(TestCompo);
    const wrapper = vm.$el.querySelector('.za-slider-handle');
    dispatchTouchStart(wrapper, {
      pageX: 50,
      pageY: 50,
    });
    dispatchTouchMove(wrapper, {
      pageX: -500,
      pageY: 50,
    });
    dispatchTouchEnd(wrapper, {
      pageX: -500,
      pageY: 50,
    });
    vm.$nextTick(() => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it('drag max offset', done => {
    let result;
    const TestCompo = {
      components: {
        zaSlider
      },
      template: `
        <za-slider
        ref='slider'
        @change='handleChange'
        ></za-slider>
      `,
      methods: {
        handleChange(ev, v) {
          result = v;
        },
      },
    };
    const { vm } = mount(TestCompo);
    const wrapper = vm.$el.querySelector('.za-slider-handle');
    dispatchTouchStart(wrapper, {
      pageX: 50,
      pageY: 50,
    });
    dispatchTouchMove(wrapper, {
      pageX: 1000,
      pageY: 50,
    });
    dispatchTouchEnd(wrapper, {
      pageX: 1000,
      pageY: 50,
    });
    vm.$nextTick(() => {
      expect(result).toBeTruthy();
      done();
    });
  });
});
