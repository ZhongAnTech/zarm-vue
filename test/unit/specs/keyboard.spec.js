import Keyboard from '@/keyboard';
import KeyboardPicker from '@/keyboard-picker';
import { createTest, createVue, destroyVM } from '../util';

describe('Keyboard', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create number keyboard', () => {
    vm = createTest(Keyboard, {
      type: 'number',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      expect(el.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
    });
  });

  it('create price keyboard', () => {
    vm = createTest(Keyboard, {
      type: 'price',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      expect(el.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
    });
  });

  it('create idcard keyboard', () => {
    vm = createTest(Keyboard, {
      type: 'idcard',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      expect(el.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
    });
  });

  it('create keyboard picker', () => {
    vm = createTest(KeyboardPicker, {
      type: 'number',
      visible: true,
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      expect(el.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
    });
  });

  it('click 1 key', done => {
    let result;
    vm = createVue({
      template: `
        <za-keyboard @keyClick='handleClick'/>
      `,
      methods: {
        handleClick(key) {
          result = key;
        },
      },
    }, true);
    vm.$el.querySelector('.za-keyboard-item').click();
    vm.$nextTick(() => {
      expect(result).to.equal('1');
      done();
    });
  });

  it('click ok key', done => {
    let result;
    vm = createVue({
      template: `
        <za-keyboard @keyClick='handleClick'/>
      `,
      methods: {
        handleClick(key) {
          result = key;
        },
      },
    }, true);
    vm.$el.querySelector('.za-keyboard-item-ok').click();
    vm.$nextTick(() => {
      expect(result).to.equal('ok');
      done();
    });
  });
});
