import Icon from '@/icon';
import { createTest, createVue, destroyVM } from '../util';

describe('Icon', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Icon, {
      prefixCls: 'za-icon',
      theme: 'primary',
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-icon')).to.be.true;
    expect(el.classList.contains('theme-primary')).to.be.true;
  });

  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <za-icon theme="primary" type='right' @click='handleClick'/>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(result).to.exist;
      done();
    });
  });
});
