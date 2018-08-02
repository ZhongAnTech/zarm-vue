import InputNumber from '@/input-number';
import { createTest, createVue, destroyVM } from '../util';

describe('InputNumber', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(InputNumber, {
      prefixCls: 'za-input-number',
    }, true);
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(vm.$el.querySelector('.za-input-number')).to.exsit;
    });
  });

  it('onFocus', () => {
    vm = createVue({
      template: `
        <za-input-number type="number"></za-input-number>
      `,
      data() {
        return {
          visible: false,
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(vm.$el.classList.contains('focus')).to.exsit;
    });
  });

  it('type', () => {
    vm = createVue({
      template: `
        <za-input-number type="number"></za-input-number>
      `,
    }, true);
    vm.$nextTick(() => {
      const disabledItem = document.querySelectorAll('.za-keyboard-item')[9];
      expect(disabledItem.classList.contains('za-keyboard-item-disabled')).to.be.true;
    });
  });

  it('hide', done => {
    vm = createVue({
      template: `
        <za-input-number type="number"></za-input-number>
      `,
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      const zaMaskEl = document.querySelector('.za-mask');
      setTimeout(() => {
        zaMaskEl.click();
        expect(document.querySelector('.za-popup').classList.contains('.za-popup-hidden')).to.be.false;
        done();
      }, 20);
    });
  });

  it('v-model', done => {
    vm = createVue({
      template: `
        <za-input-number type="number" v-model='v1'></za-input-number>
      `,
      data() {
        return {
          v1: '12323',
        };
      },
    }, true);
    vm.$nextTick(() => {
      vm.v1 = '12311';
      setTimeout(() => {
        const contentEl = vm.$el.querySelector('.za-input-content');
        expect(contentEl.innerText).to.equal('12311');
        done();
      }, 20);
    });
  });

  it('key click', done => {
    vm = createVue({
      template: `
        <za-input-number type="number" v-model='v1'></za-input-number>
      `,
      data() {
        return {
          v1: '123',
        };
      },
    }, true);
    document.querySelector('.za-keyboard-item').click();
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(vm.v1).to.equal('1231');
        done();
      }, 20);
    });
  });
});
