import Badge from '@/badge';
import { createTest, createVue, destroyVM } from '../util';

describe('Badge', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('prefixCls', () => {
    vm = createTest(Badge, {
      prefixCls: 'za-badge-1',
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('za-badge-1')).to.be.true;
  });

  it('theme', () => {
    vm = createTest(Badge, {
      theme: 'info',
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('theme-info')).to.be.true;
  });

  it('shape', () => {
    vm = createTest(Badge, {
      shape: 'radius',
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('shape-radius')).to.be.true;
  });

  it('sup', () => {
    vm = createTest(Badge, {
      sup: true,
    }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.querySelector('.za-badge-sup-up')).to.exits;
  });

  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <za-badge sup shape='round' text='999+' @click="handleClick">
          <div>test</div>
        </za-badge>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
    }, true);
    vm.$el.querySelector('.za-badge-sup').click();

    setTimeout(_ => { // eslint-disable-line no-unused-vars
      expect(result).to.exist;
      done();
    }, 50);
  });
});
