import zaSlider from '@/slider';
import { mount, triggerDrag } from '../util';

Element.prototype.getBoundingClientRect = jest.fn(() => ({ width: 100, left: 0 }));

describe('Slider', () => {
  it('create', done => {
    const TestCompo = {
      components: {
        zaSlider,
      },
      template: `
        <za-slider
        :default-value='0'
        ></za-slider>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(wrapper.find('.za-slider').exists()).toBe(true);
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
    vm.$nextTick(() => {
      vm.$el.click();
      done();
    });
  });

  it('change value', done => {
    const TestCompo = {
      components: {
        zaSlider,
      },
      template: `
        <za-slider
        ref='slider'
        :default-value='v'
        ></za-slider>
      `,
      data() {
        return {
          v: 0,
        };
      },
    };
    const wrapper = mount(TestCompo, { attachToDocument: true });
    const { vm } = wrapper;
    const el = wrapper.find('.za-slider__handle');
    triggerDrag(el, 100, 0);
    vm.$nextTick(() => {
      expect(vm.$refs.slider.value).not.toEqual(0);
      done();
    });
  });

  it('drag event', () => {
    const TestCompo = {
      components: {
        zaSlider,
      },
      template: `
        <za-slider
        ref='slider'
        :default-value='0'
        ></za-slider>
      `,
    };
    const wrapper = mount(TestCompo, { attachToDocument: true });
    const el = wrapper.find('.za-slider__handle');
    triggerDrag(el, 100, 0);
  });
});
