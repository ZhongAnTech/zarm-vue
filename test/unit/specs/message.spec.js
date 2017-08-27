import Message from '@/message';
import { createTest, createVue, destroyVM } from '../util';

describe('Message', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Message, {
      prefixCls: 'za-message',
      theme: 'primary',
      size: 'lg',
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-message')).to.be.true;
    expect(el.classList.contains('theme-primary')).to.be.true;
    expect(el.classList.contains('size-lg')).to.be.true;
  });

  it('closable', done => {
    vm = createVue({
      template: `
        <div>
          <za-message theme='error' closable :visible.sync='visible'>链接样式的</za-message>
        </div>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    expect(vm.$el.querySelector('.za-icon-wrong')).to.exist;
    vm.$el.querySelector('.za-icon-wrong').click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(false);
      done();
    });
  });

  it('hasArrow', done => {
    let result;
    vm = createVue({
      template: `
        <div>
          <za-message ref='message' theme='warning' hasArrow @click='handleClick'>链接样式的</za-message>
        </div>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
    }, true);
    expect(vm.$el.querySelector('.za-icon-arrow-right')).to.exist;
    vm.$refs.message.$el.click();
    vm.$nextTick(() => {
      expect(result).to.exist;
      done();
    });
  });
});
