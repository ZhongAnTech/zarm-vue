import Button from '@/button';
import { createTest, createVue, destroyVM } from '../util';

describe('Button', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Button, {
      theme: 'primary',
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('theme-primary')).to.be.true;
  });

  it('prefixCls', () => {
    vm = createTest(Button, {
      prefixCls: 'za-button-test',
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('za-button-test')).to.be.true;
  });

  it('size', () => {
    vm = createTest(Button, {
      size: 'xl',
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('size-xl')).to.be.true;
  });

  it('shape', () => {
    vm = createTest(Button, {
      shape: 'radius',
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('shape-radius')).to.be.true;
  });

  it('block', () => {
    vm = createTest(Button, {
      block: true,
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('block')).to.be.true;
  });

  it('bordered', () => {
    vm = createTest(Button, {
      bordered: true,
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('bordered')).to.be.true;
  });

  it('active', () => {
    vm = createTest(Button, {
      active: true,
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('active')).to.be.true;
  });

  it('focus', () => {
    vm = createTest(Button, {
      focus: true,
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('focus')).to.be.true;
  });

  it('disabled', () => {
    vm = createTest(Button, {
      disabled: true,
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('disabled')).to.be.true;
  });

  it('loading', () => {
    vm = createTest(Button, {
      loading: true,
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.getElementsByTagName('svg')[0].classList.contains('rotate360')).to.be.true;
  });

  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <za-button @click="handleClick"></za-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
    }, true);
    vm.$el.click();

    setTimeout(_ => { // eslint-disable-line no-unused-vars
      expect(result).to.exist;
      done();
    }, 20);
  });
});
