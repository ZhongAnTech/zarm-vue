import zaInputNumber from '@/input-number';
import { mount } from '../util';

describe('InputNumber', () => {
  it('create', () => {
    const wrapper = mount(zaInputNumber, {
      propsData: {
        prefixCls: 'za-input-number',
      },
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(wrapper.find('.za-input-number').exists()).toBe(true);
    });
  });

  it('onFocus', () => {
    const TestCompo = {
      components: {
        zaInputNumber,
      },
      template: `
        <za-input-number type="number"></za-input-number>
      `,
      data() {
        return {
          visible: false,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.element.click();
    vm.$nextTick(() => {
      expect(wrapper.find('.za-input--focus').exists()).toBe(true);
    });
  });

  it('hide', done => {
    const TestCompo = {
      components: {
        zaInputNumber,
      },
      template: `
        <za-input-number type="number"></za-input-number>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.element.click();
    vm.$nextTick(() => {
      const zaOutsideClick = document.querySelector('body');
      setTimeout(() => {
        zaOutsideClick.click();
        expect(wrapper.find('.za-popup--hidden').exists()).toBe(false);
        done();
      }, 20);
    });
  });

  it('v-model', done => {
    const TestCompo = {
      components: {
        zaInputNumber,
      },
      template: `
        <za-input-number type="number" v-model='v1'></za-input-number>
      `,
      data() {
        return {
          v1: '12323',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      vm.v1 = '12311';
      setTimeout(() => {
        const contentEl = wrapper.find('.za-input__content');
        expect(contentEl.text()).toEqual('12311');
        done();
      }, 20);
    });
  });

  it('key click', done => {
    const TestCompo = {
      components: {
        zaInputNumber,
      },
      template: `
        <za-input-number type="number" v-model='v1'></za-input-number>
      `,
      data() {
        return {
          v1: '123',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.element.click();
    document.querySelector('.za-keyboard__item').click();
    vm.$nextTick(() => {
      // expect(vm.v1).toEqual('1231');
      done();
    });
  });
});
