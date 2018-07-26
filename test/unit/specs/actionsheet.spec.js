import ActionSheet from '@/actionsheet';
import { createTest, createVue, destroyVM } from '../util';

describe('ActionSheet', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createTest(ActionSheet, {
      prefixCls: 'za-actionsheet',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      expect(el.querySelector('.za-actionsheet')).to.exsit;
      done();
    });
  }, true);

  it('actions', done => {
    let result;
    vm = createVue({
      template: `
        <za-actionsheet :visible.sync='visible' :actions='actions' @cancel='handleCancel'/>
      `,
      data() {
        return {
          visible: true,
          actions: [{
            text: '操作一',
            onClick: () => {},
          }, {
            text: '操作二',
            onClick: () => () => {},
          }, {
            theme: 'error',
            text: '操作三',
            onClick: () => () => {},
          }],
        };
      },
      methods: {
        handleCancel(evt) {
          result = evt;
        },
      },
    }, true);
    vm.$el.querySelector('.za-mask').click();
    vm.$nextTick(() => {
      expect(vm.visible).to.be.false;
      expect(result).to.exist;
      done();
    });
  });

  it('visible', done => {
    vm = createVue({
      template: `
        <za-actionsheet :visible.sync='visible' :actions='actions'/>
      `,
      data() {
        return {
          visible: true,
          actions: [{
            text: '操作一',
            onClick: () => {},
          }, {
            text: '操作二',
            onClick: () => () => {},
          }, {
            theme: 'error',
            text: '操作三',
            onClick: () => () => {},
          }],
        };
      },
    }, true);
    vm.$el.querySelector('.za-mask').click();
    vm.$nextTick(() => {
      expect(vm.visible).to.be.false;
      done();
    });
  });

  it('cancelText', done => {
    vm = createTest(ActionSheet, {
      prefixCls: 'za-actionsheet',
      cancelText: '关闭',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(el.querySelector('.za-actionsheet-cancel').innerText).to.equal('关闭');
        done();
      }, 20);
    });
  });

  it('showCancel', done => {
    vm = createTest(ActionSheet, {
      prefixCls: 'za-actionsheet',
      showCancel: false,
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => {
      expect(!el.querySelector('.za-actionsheet-cancel')).to.exsit;
      done();
    });
  });
});
