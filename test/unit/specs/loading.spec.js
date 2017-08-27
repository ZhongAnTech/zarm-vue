import { createVue, destroyVM } from '../util';

describe('Loading', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-loading ref='loading' :visible.sync='visible'></za-loading>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    expect(vm.$el.classList.contains('za-loading')).to.be.true;
  });

  it('hide', () => {
    vm = createVue({
      template: `
        <za-loading :visible.sync='visible'></za-loading>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    vm.visible = false;
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-loading-open')).to.be.false;
    });
  });
});
