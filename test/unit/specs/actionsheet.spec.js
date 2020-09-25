import zaActionsheet from '@/actionsheet';
import { mount } from '../util';

describe('ActionSheet', () => {
  it('create', () => {
    const wrapper = mount(zaActionsheet, {
      propsData: {
        prefixCls: 'za-actionsheet',
        visible: true,
      },
    });
    expect(wrapper.find('.za-actionsheet').exists()).toBe(true);
  });

  it('cancel action', done => {
    let result;
    const TestCompo = {
      components: {
        zaActionsheet,
      },
      template: `
        <za-actionsheet :visible.sync='visible' :actions='actions' @cancel='handleCancel'/>
      `,
      data() {
        return {
          visible: true,
          actions: [
            {
              text: '操作一',
              onClick: () => { },
            },
            {
              text: '操作二',
              onClick: () => () => { },
            },
            {
              theme: 'error',
              text: '操作三',
              onClick: () => () => { },
            },
          ],
        };
      },
      methods: {
        handleCancel() {
          result = 1;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.find('.za-actionsheet__cancel>.za-actionsheet__item').trigger('click');
    vm.$nextTick(() => {
      expect(vm.visible).toEqual(false);
      expect(result).toEqual(1);
      done();
    });
  });

  it('visible', done => {
    const TestCompo = {
      components: {
        zaActionsheet,
      },
      template: `
        <za-actionsheet :visible.sync='visible' :actions='actions'/>
      `,
      data() {
        return {
          visible: true,
          actions: [
            {
              text: '操作一',
              onClick: () => { },
            },
            {
              text: '操作二',
              onClick: () => () => { },
            },
            {
              theme: 'error',
              text: '操作三',
              onClick: () => () => { },
            },
          ],
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.find('.za-mask').trigger('click');
    vm.$nextTick(() => {
      expect(vm.visible).toBe(false);
      done();
    });
  });

  it('cancelText', done => {
    const wrapper = mount(zaActionsheet, {
      propsData: {
        prefixCls: 'za-actionsheet',
        cancelText: '关闭',
        visible: true,
      },
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(wrapper.find('.za-actionsheet__cancel').exists()).toBe(true);
      done();
    });
  });

  it('showCancel', done => {
    const wrapper = mount(zaActionsheet, {
      propsData: {
        prefixCls: 'za-actionsheet',
        showCancel: false,
        visible: true,
      },
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(wrapper.find('.za-actionsheet__cancel').exists()).toBe(false);
      done();
    });
  });
});
