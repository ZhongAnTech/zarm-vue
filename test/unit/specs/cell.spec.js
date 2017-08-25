import Cell from '@/cell';
import { createTest, createVue, destroyVM } from '../util';

describe('Cell', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(Cell, {
      template: `
      <za-cell title='标题文字'>
        <div slot='description'>描述文字</div>
      </za-cell>
      `,
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-cell')).to.be.true;
  });

  it('prefixCls', () => {
    vm = createTest(Cell, {
      prefixCls: 'za-cell-test',
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-cell-test')).to.be.true;
  });

  it('title', () => {
    vm = createTest(Cell, {
      title: '测试',
    }, true);
    const el = vm.$el.querySelector('.za-cell-title');
    expect(el.innerText === '测试').to.be.true;
  });

  it('theme', () => {
    vm = createTest(Cell, {
      theme: 'primary',
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('theme-primary')).to.be.true;
  });

  it('disabled', () => {
    vm = createTest(Cell, {
      disabled: true,
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('disabled')).to.be.true;
  });

  it('hasIcon', () => {
    vm = createVue({
      template: `
        <za-cell>
          <za-icon type='right' slot='icon'/>
        </za-cell>
      `,
    }, true);
    const el = vm.$el;
    expect(el.querySelector('.za-icon-right')).to.exist;
    expect(el.classList.contains('has-icon')).to.to.true;
  });

  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <za-cell @click="handleClick">标题</za-cell>
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
