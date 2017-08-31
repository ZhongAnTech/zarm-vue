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

  it('$zaAlert', done => {
    let result;
    vm = createVue({
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          this.$zaAlert('test', {
            callback: (event) => {
              result = event;
            },
          });
        },
      },
    }, true);
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-modal')).to.exsit;
      document.querySelector('.za-modal .za-button').click();
      setTimeout(() => {
        expect(document.querySelector('.za-modal')).to.not.exsit;
        expect(result).to.exist;
        document.body.removeChild(document.querySelector('.za-modal'));
        done();
      }, 100);
    }, 20);
  });

  it('$zaAlert with Vnode', done => {
    let result;
    vm = createVue({
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          const h = this.$createElement;
          const message = h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode'),
          ]);
          this.$zaAlert(message, {
            callback: (event) => {
              result = event;
            },
          });
        },
      },
    }, true);
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-modal')).to.exsit;
      document.querySelector('.za-modal .za-button').click();
      setTimeout(() => {
        expect(document.querySelector('.za-modal')).to.not.exsit;
        expect(result).to.exist;
        document.body.removeChild(document.querySelector('.za-modal'));
        done();
      }, 100);
    }, 20);
  });
});
