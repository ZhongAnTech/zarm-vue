import { createVue, destroyVM } from '../util';

describe('Alert', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('open and close', done => {
    let result;
    vm = createVue({
      template: `
        <za-alert :visible.sync='visible' radius title="警告" message="这里是警告信息" @close='handleClose'></za-alert>
      `,
      methods: {
        handleClose(evt) {
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
      document.querySelector('.za-button').click();
      vm.$nextTick(() => {
        expect(vm.visible).to.be.false;
        expect(result).to.exist;
        done();
      });
    });
  });
});
