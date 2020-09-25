import zaWheel from '@/wheel';
import { mount } from '../util';

describe('Wheel', () => {
  it('create', () => {
    const wrapper = mount(zaWheel, {
      propsData: {
        defaultValue: '1',
        dataSource: [{
          label: '1',
          value: '1',
        },
        {
          label: '2',
          value: '2',
        }],
      },
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(wrapper.find('.za-wheel').exists()).toBe(true);
    });
  });

  it('dataSource', () => {
    const wrapper = mount(zaWheel, {
      propsData: {
        dataSource: [{
          label: '1',
          value: '1',
        },
        {
          label: '2',
          value: '2',
        }],
      },
    });
    const { vm } = wrapper;
    wrapper.setProps({
      selectedValue: '2',
    });
    vm.$nextTick(() => {
      expect(wrapper.find('.za-wheel')).toBeTruthy();
    });
  });

  it('fireValueChange', () => {
    const wrapper = mount(zaWheel, {
      propsData: {
        defaultValue: '1',
        dataSource: [{
          label: '1',
          value: '1',
        },
        {
          label: '2',
          value: '2',
        }],
      },
    });
    const { vm } = wrapper;
    // console.log('TCL: vm', wrapper.html());
    vm.fireValueChange('1');
    vm.$nextTick(() => {
      expect(wrapper.find('.za-wheel')).toBeTruthy();
    });
  });
});
