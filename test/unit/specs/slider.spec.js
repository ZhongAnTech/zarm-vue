import { createVue, destroyVM } from '../util';

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

  it('change value 10', done => {
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
