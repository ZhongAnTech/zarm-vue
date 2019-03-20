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
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(el.querySelector('.za-input-number')).to.exsit;
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

  it('type', done => {
    vm = createVue({
      template: `
        <za-input-number type="number"></za-input-number>
      `,
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      const disabledItem = vm.$el.querySelectorAll('.za-keyboard-item')[9];
      expect(disabledItem.classList.contains('za-keyboard-item-disabled')).to.be.true;
      done();
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
      const zaMaskEl = vm.$el.querySelector('.za-mask');
      zaMaskEl.click();
      expect(vm.$el.querySelector('.za-popup').classList.contains('.za-popup-hidden')).to.be.false;
      done();
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
    vm.$el.click();
    vm.v1 = '12311';
    vm.$nextTick(() => {
      const contentEl = vm.$el.querySelector('.za-input-content');
      expect(contentEl.innerText).to.equal('12311');
      done();
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
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-keyboard-item').click();
      expect(vm.v1).to.equal('1231');
      done();
    });
  });
});
