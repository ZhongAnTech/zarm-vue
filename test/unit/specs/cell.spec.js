import Cell from '@/cell';
import { createTest, createVue, destroyVM } from '../util';

describe('Cell', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(Cell, {
      template: `
      <za-cell title='标题文字'>
        <div slot='description'>描述文字</div>
      </za-cell>
      `,
    }, true);
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-cell')).to.be.true;
      done();
    });
  });

  it('prefixCls', done => {
    vm = createTest(Cell, {
      prefixCls: 'za-cell-test',
    }, true);
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-cell-test')).to.be.true;
      done();
    });
  });

  it('title', done => {
    vm = createTest(Cell, {
      title: '测试',
    }, true);
    vm.$nextTick(() => {
      setTimeout(() => {
        const el = vm.$el.querySelector('.za-cell-title');
        expect(el.innerText === '测试').to.be.true;
        done();
      }, 20);
    });
  });

  it('theme', done => {
    vm = createTest(Cell, {
      theme: 'primary',
    }, true);
    vm.$nextTick(() => {
      const el = vm.$el;
      expect(el.classList.contains('theme-primary')).to.be.true;
      done();
    });
  });

  it('disabled', done => {
    vm = createTest(Cell, {
      disabled: true,
    }, true);
    const el = vm.$el;
    setTimeout(() => {
      expect(el.classList.contains('disabled')).to.be.true;
      done();
    }, 20);
  });

  it('hasIcon', done => {
    vm = createVue({
      template: `
        <za-cell>
          <za-icon type='right' slot='icon'/>
        </za-cell>
      `,
    }, true);
    setTimeout(() => {
      expect(vm.$el.querySelector('.za-icon-right')).to.exist;
      done();
    }, 20);
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
