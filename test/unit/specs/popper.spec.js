import zaPopper from '@/popper';
import zaButton from '@/button';
import { mount } from '../util';

describe('Popper', () => {
  it('create', () => {
    const wrapper = mount(zaPopper, {
      propsData: {
        prefixCls: 'za-popper',
        visible: false,
      },
    });
    expect(wrapper.contains('.za-popper')).toBe(true);
    wrapper.destroy();
  });

  it('set visible true', () => {
    const wrapper = mount(zaPopper, {
      propsData: {
        prefixCls: 'za-popper',
        visible: false,
      },
    });
    const { vm } = wrapper;
    vm.visible = true;
    vm.$nextTick(() => {
      expect(wrapper.contains('.popper-container')).toBe(true);
      wrapper.destroy();
    });
  });

  it('click outside', () => {
    const wrapper = mount(zaPopper, {
      propsData: {
        prefixCls: 'za-popper',
        visible: true,
      },
    });
    const { vm } = wrapper;
    document.body.click();
    wrapper.vm.visible = false;
    vm.$nextTick(() => {
      expect(wrapper.contains('.popper-container')).toBe(false);
      wrapper.destroy();
    });
  });

  it('click', () => {
    const TestCompo = {
      components: {
        zaPopper,
        zaButton,
      },
      template: `
        <za-popper
          trigger="click"
          direction="topLeft"
          content="topLeft text"
        >
          <za-button ghost size="xs">TL</za-button>
        </za-popper>
      `,
    };
    const wrapper = mount(TestCompo);
    wrapper.vm.$nextTick(() => {
      wrapper.find('.za-popper__inner').trigger('click');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.contains('.popper-container')).toBeTruthy();
        wrapper.destroy();
      });
    });
  });
});
