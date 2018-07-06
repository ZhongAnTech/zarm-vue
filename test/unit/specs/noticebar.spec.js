import { createVue, destroyVM } from '../util';

describe('NoticeBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-notice-bar theme='primary' size='lg'>noticeBar</za-notice-bar>
      `,
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-message')).to.be.true;
    expect(el.classList.contains('theme-primary')).to.be.true;
    expect(el.classList.contains('size-lg')).to.be.true;
  });
  it('hasArrow', () => {
    vm = createVue({
      template: `
        <za-notice-bar hasArrow >noticeBar</za-notice-bar>
      `,
    }, true);
    const el = vm.$el;
    expect(el.querySelector('.za-icon-arrow-right')).to.exist;
  });
  it('closable', () => {
    vm = createVue({
      template: `
        <za-notice-bar closable >noticeBar</za-notice-bar>
      `,
    }, true);
    const el = vm.$el;
    expect(el.querySelector('.za-icon-wrong')).to.exist;
  });
  it('icon', () => {
    vm = createVue({
      template: `
      <za-notice-bar icon='wrong-round'>
        自定义icon，自定义主题，显示关闭按钮。
      </za-notice-bar>
      `,
    }, true);
    const el = vm.$el;
    expect(el.querySelector('.za-icon-wrong-round')).to.exist;
  });
  it('unmount', done => {
    vm = createVue({
      template: `
      <div>
        <za-notice-bar icon='wrong-round' v-if='visible'>
        自定义icon，自定义主题，显示关闭按钮。
        </za-notice-bar>
      </div>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    vm.visible = false;
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.za-noticebar')).to.not.exist;
      done();
    });
  });

  it('visible', done => {
    let result;
    vm = createVue({
      template: `
        <za-notice-bar :visible.sync='visible' @click='handleClick' closable>
          noticeBar
        </za-notice-bar>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    vm.$el.querySelector('.za-icon-wrong').click();
    vm.$nextTick(() => {
      expect(result).to.exist;
      expect(vm.visible).to.be.false;
      done();
    });
  });

  it('autoscroll', done => {
    vm = createVue({
      template: `
        <za-notice-bar autoscroll>自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。</za-notice-bar>
      `,
    }, true);
    const body = vm.$el.querySelector('.za-noticebar-body');
    vm.$nextTick(() => {
      expect(body.style.left).to.not.equal(0);
      done();
    }, 1500);
  });
});
