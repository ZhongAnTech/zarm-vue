import Keyboard from '@/keyboard';
import KeyboardPicker from '@/keyboard-picker';
import { createTest, createVue, destroyVM } from '../util';

describe('Keyboard', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create number keyboard', done => {
    vm = createTest(Keyboard, {
      type: 'number',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(el.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
        done();
      }, 20);
    });
  });

  it('create price keyboard', done => {
    vm = createTest(Keyboard, {
      type: 'price',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(el.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
        done();
      }, 20);
    });
  });

  it('create idcard keyboard', done => {
    vm = createTest(Keyboard, {
      type: 'idcard',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(el.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
        done();
      }, 20);
    });
  });

  it('create keyboard picker', done => {
    vm = createTest(KeyboardPicker, {
      type: 'number',
      visible: true,
    }, true);
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(document.querySelector('.za-keyboard-item').innerText.trim()).to.equal('1');
        done();
      }, 20);
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
      setTimeout(() => {
        expect(result).to.equal('1');
        done();
      }, 20);
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
      setTimeout(() => {
        expect(result).to.equal('ok');
        done();
      }, 20);
    });
  });
});
