import { createVue, destroyVM } from '../util';

describe('Toast', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-toast :visible.sync='visible'>默认3秒自动关闭</za-toast>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    expect(vm.$el.classList.contains('za-toast')).to.be.true;
    expect(vm.$el.classList.contains('za-toast-open')).to.be.true;
  });

  it('open and close', done => {
    vm = createVue({
      template: `
        <za-toast :visible.sync='visible' :duration='30'>默认3秒自动关闭</za-toast>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    expect(vm.$el.classList.contains('za-toast-open')).to.be.true;
    setTimeout(() => {
      expect(vm.$el.classList.contains('za-toast-open')).to.be.false;
      vm.visible = true;
      setTimeout(() => {
        expect(vm.$el.classList.contains('za-toast-open')).to.be.true;
        done();
      }, 30);
    }, 60);
  });

  it('close on modal', done => {
    vm = createVue({
      template: `
        <za-toast :visible.sync='visible' :close-on-click-modal='true'>默认3秒自动关闭</za-toast>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    vm.$el.querySelector('.za-mask').click();
    setTimeout(() => {
      expect(vm.$el.classList.contains('za-toast-open')).to.be.false;
      done();
    }, 60);
  });
});
