import Slider from '@/slider';
import { createVue, createTest, destroyVM } from '../util';

describe('Slider', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
      <za-slider
      :value='0'
      ></za-slider>
      `,
    }, true);
    expect(vm.$el.classList.contains('za-slider')).to.be.true;
  });

  it('slider shadow position', () => {
    vm = createTest(Slider, {
      prefixCls: 'za-slider',
    }, true);
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      vm.$el.click();
    });
  });

  it('slider change value', done => {
    vm = createVue({
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
    }, true);
    expect(vm.$el.classList.contains('za-slider')).to.be.true;
    vm.$nextTick(() => {
      vm.value = 10;
      done();
    });
  });
});
