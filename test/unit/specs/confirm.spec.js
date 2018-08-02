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
        <za-confirm :visible.sync='visible' title="确认信息" message="你确定要这样做吗？" :ok='handleOk' :cancel='handleCancel'></za-confirm>
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

  it('$zaConfirm cancel', done => {
    let result;
    vm = createVue({
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          this.$zaConfirm({
            message: 'test',
            ok: (e) => {
              result = e;
              return true;
            },
            cancel: (e) => {
              result = e;
            },
          });
        },
      },
    }, true);
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-confirm')).to.exsit;
      document.querySelectorAll('.za-modal .za-button')[0].click();
      setTimeout(() => {
        expect(document.querySelector('.za-modal')).to.not.exsit;
        expect(result).to.exist;
        document.body.removeChild(document.querySelector('.za-modal'));
        done();
      }, 100);
    }, 20);
  });

  it('$zaConfirm ok', done => {
    let result;
    vm = createVue({
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          this.$zaConfirm({
            message: 'test',
            ok: (e) => {
              result = e;
              return true;
            },
            cancel: (e) => {
              result = e;
            },
          });
        },
      },
    }, true);
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-confirm')).to.exsit;
      document.querySelectorAll('.za-modal .za-button')[1].click();
      setTimeout(() => {
        expect(document.querySelector('.za-modal')).to.not.exsit;
        expect(result).to.exist;
        document.body.removeChild(document.querySelector('.za-modal'));
        done();
      }, 100);
    }, 20);
  });

  it('$zaConfirm click ok not close', done => {
    let result;
    vm = createVue({
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          this.$zaConfirm({
            message: 'test',
            ok: (e) => {
              result = e;
              return false;
            },
            cancel: (e) => {
              result = e;
            },
          });
        },
      },
    }, true);
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-confirm')).to.exsit;
      document.querySelectorAll('.za-modal .za-button')[1].click();
      setTimeout(() => {
        expect(document.querySelector('.za-modal')).to.exsit;
        expect(result).to.exist;
        document.body.removeChild(document.querySelector('.za-modal'));
        done();
      }, 100);
    }, 20);
  });

  it('$zaConfirm with VNode', done => {
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
          this.$zaConfirm(message, {
            ok: (e) => {
              result = e;
              return true;
            },
            cancel: (e) => {
              result = e;
            },
          });
        },
      },
    }, true);
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-confirm')).to.exsit;
      document.querySelectorAll('.za-modal .za-button')[1].click();
      setTimeout(() => {
        expect(document.querySelector('.za-modal')).to.not.exsit;
        expect(result).to.exist;
        document.body.removeChild(document.querySelector('.za-modal'));
        done();
      }, 100);
    }, 20);
  });
});
