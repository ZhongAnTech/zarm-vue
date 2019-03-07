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
      expect(wrapper.find('.za-input-number')).toBeTruthy();
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
    vm.$el.click();
    vm.$nextTick(() => {
      expect(wrapper.contains('.focus')).toBeTruthy();
    });
  });

  it('type', () => {
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
    vm.$nextTick(() => {
      const disabledItem = document.querySelectorAll('.za-keyboard__item')[9];
      expect(disabledItem.classList.contains('za-keyboar__item--disabled')).toBe(true);
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
    vm.$el.click();
    vm.$nextTick(() => {
      const zaMaskEl = document.querySelector('.za-mask');
      setTimeout(() => {
        zaMaskEl.click();
        expect(document.querySelector('.za-popup').classList.contains('.za-popup--hidden')).toBe(false);
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
    wrapper.find('.za-keyboard__item').trigger('click');
    vm.$nextTick(() => {
      expect(vm.v1).toEqual('1231');
      done();
    });
  });
});
