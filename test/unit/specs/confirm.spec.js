import { createVue, destroyVM } from '../util';

describe('Confirm', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('open and close', done => {
    let result;
    vm = createVue({
      template: `
        <za-confirm :visible.sync='visible' title="确认信息" message="你确定要这样做吗？" :on-ok='handleOk' :on-cancel='handleCancel'></za-confirm>
      `,
      methods: {
        handleOk(evt) {
          result = evt;
        },
        handleCancel(evt) {
          this.visible = false;
          result = evt;
        },
      },
      data() {
        return {
          visible: false,
        };
      },
    }, true);
    vm.visible = true;
    vm.$nextTick(() => {
      document.querySelectorAll('.za-button')[0].click();
      vm.$nextTick(() => {
        expect(vm.visible).to.be.false;
        expect(result).to.exist;
        done();
      });
    });
  });
});
