import ActionSheet from '@/actionsheet';
import { createTest, createVue, destroyVM } from '../util';

describe('ActionSheet', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ActionSheet, {
      prefixCls: 'za-icon',
      shape: 'radius',
      cancelText: 'cancel',
      visible: true,
    }, true);
    const el = vm.$el;
    expect(el.querySelector('.za-actionsheet')).to.exsit;
    expect(el.querySelector('.shape-radius')).to.exsit;
    // expect(el.querySelector
    // ('.za-actionsheet-cancel .za-actionsheet-btn').textContent === 'cancel').to.be.true;
  }, true);

  it('click to hide', done => {
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
      expect(vm.visible).to.be.not.true;
      expect(result).to.exist;
      done();
    });
  });

  it('change sync', done => {
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
});
