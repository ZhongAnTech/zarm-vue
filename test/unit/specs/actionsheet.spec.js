import ActionSheet from '@/actionsheet';
import { mount } from '../util';

describe('ActionSheet', () => {

  it('create', done => {
    const wrapper = mount(ActionSheet, {
      propsData: {
        prefixCls: 'za-actionsheet'
      }
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.za-actionsheet')).toBeTruthy();
      done();
    });
  }, true);

  it('cancel action', done => {
    let result;
    const TestCompo = {
      components: {
        ActionSheet
      },
      template: `
        <ActionSheet :visible.sync='visible' :actions='actions' @cancel='handleCancel'/>
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
          result = 1;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector('.za-actionsheet-cancel>.za-actionsheet-item').click();
    vm.$nextTick(() => {
      expect(vm.visible).toEqual(false);
      expect(result).toEqual(1);
      done();
    });
  });

  it('visible', done => {
    const TestCompo = {
      components: {
        ActionSheet
      },
      template: `
        <ActionSheet :visible.sync='visible' :actions='actions'/>
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
    }
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector('.za-mask').click();
    vm.$nextTick(() => {
      expect(vm.visible).toBe(false);
      done();
    });
  });

  it('cancelText', done => {
    const wrapper = mount(ActionSheet, {
      propsData: {
        prefixCls: 'za-actionsheet',
        cancelText: '关闭',
      }
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.za-actionsheet-cancel')).toBeTruthy();
      done();
    });
  });

  it('showCancel', done => {
    const wrapper = mount(ActionSheet, {
      propsData: {
        prefixCls: 'za-actionsheet',
        showCancel: false,
      }
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.za-actionsheet-cancel')).toBeNull();
      done();
    });
  });
});
