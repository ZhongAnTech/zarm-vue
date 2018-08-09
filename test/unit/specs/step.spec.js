import zaStepper from '@/stepper';
import { mount } from '../util';

describe('Stepper', () => {
  it('create', () => {
    const wrapper = mount(zaStepper, {
      propsData: {
        prefixCls: 'za-stepper',
        theme: 'primary',
        size: 'xl',
        shape: 'radius',
      },
    });
    expect(wrapper.contains('.za-stepper')).toBe(true);
    expect(wrapper.contains('.theme-primary')).toBe(true);
    expect(wrapper.contains('.size-xl')).toBe(true);
    expect(wrapper.contains('.shape-radius')).toBe(true);
  });

  it('input value', done => {
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper'></za-stepper>
      `,
      data() {
        return {
          stepper: 0,
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$nextTick(() => {
      const inputElm = wrapper.find('input');
      inputElm.setValue(12);
      vm.$nextTick(() => {
        expect(vm.stepper).toEqual(12);
        done();
      });
    });
  });

  it('input limit min', done => {
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper' :min="-3"></za-stepper>
      `,
      data() {
        return {
          stepper: 0,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      const inputElm = wrapper.find('input');
      inputElm.setValue(-4);
      vm.$nextTick(() => {
        expect(vm.stepper).toEqual(-3);
        done();
      });
    });
  });

  it('input limit max', done => {
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper' :max="3"></za-stepper>
      `,
      data() {
        return {
          stepper: 0,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      const inputElm = wrapper.find('input');
      inputElm.setValue(4);
      vm.$nextTick(() => {
        expect(vm.stepper).toEqual(3);
        done();
      });
    });
  });

  it('add and minus', done => {
    let result;
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper' @change='handleChange'></za-stepper>
      `,
      methods: {
        handleChange(evt) {
          result = evt;
        },
      },
      data() {
        return {
          stepper: 0,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector('.za-stepper-sub').click();
    vm.$nextTick(() => {
      expect(result).not.toBeUndefined();
      expect(vm.stepper).toEqual(-1);
      vm.$el.querySelector('.za-stepper-plus').click();
      vm.$nextTick(() => {
        expect(vm.stepper).toEqual(0);
        done();
      });
    });
  });

  it('add and minus with step = 2', done => {
    let result;
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper' @change='handleChange' :step='2'></za-stepper>
      `,
      methods: {
        handleChange(evt) {
          result = evt;
        },
      },
      data() {
        return {
          stepper: 0,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector('.za-stepper-sub').click();
    vm.$nextTick(() => {
      expect(result).not.toBeUndefined();
      expect(vm.stepper).toEqual(-2);
      vm.$el.querySelector('.za-stepper-plus').click();
      vm.$nextTick(() => {
        expect(vm.stepper).toEqual(0);
        done();
      });
    });
  });

  it('disabled', done => {
    let result;
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper' @change='handleChange' disabled></za-stepper>
      `,
      methods: {
        handleChange(evt) {
          result = evt;
        },
      },
      data() {
        return {
          stepper: 0,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.querySelector('.za-stepper-sub').click();
    vm.$nextTick(() => {
      expect(result).toBeUndefined();
      expect(vm.stepper).toEqual(0);
      done();
    });
  });

  it('min', done => {
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper' :min='-3' :step='10'></za-stepper>
      `,
      data() {
        return {
          stepper: 0,
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector('.za-stepper-sub').click();
    vm.$nextTick(() => {
      expect(vm.stepper).toEqual(-3);
      done();
    });
  });

  it('max', done => {
    const TestCompo = {
      components: {
        zaStepper,
      },
      template: `
        <za-stepper v-model='stepper' :max='3' :step='5'></za-stepper>
      `,
      data() {
        return {
          stepper: 0,
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector('.za-stepper-plus').click();
    vm.$nextTick(() => {
      expect(vm.stepper).toEqual(3);
      done();
    });
  });
});
