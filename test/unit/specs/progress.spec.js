/* eslint-disable radix */
import zaProgress from '@/progress';
import { mount } from '../util';

describe('Progress', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaProgress,
      },
      template: `
        <za-progress :percent='percent' type='line' weight='normal' >
          {{percent + '%'}}
        </za-progress>
      `,
      data() {
        return {
          percent: 10,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(wrapper.find('.za-progress').exists()).toBe(true);
    expect(wrapper.find('.za-progress--line').exists()).toBe(true);
    expect(vm.$el.querySelector('.za-progress__inner').style.height).toEqual('8px');
  });

  it('type', () => {
    const wrapper = mount(zaProgress, {
      propsData: {
        type: 'semi-circle',
        percent: 50,
      },
    });
    expect(wrapper.find('.za-progress__semi-circle').exists()).toBe(true);
  });

  it('percent', () => {
    const wrapper = mount(zaProgress, {
      propsData: {
        type: 'semi-circle',
        percent: 50,
      },
    });
    const {
      vm,
    } = wrapper;
    expect(wrapper.find('.za-progress__semi-circle').exists()).toBe(true);
    const strokeDasharray = parseInt(vm.$el.querySelector('.za-progress__line').style.strokeDasharray);
    const strokeDashoffset = parseInt(vm.$el.querySelector('.za-progress__line').style.strokeDashoffset);
    expect(strokeDashoffset).toEqual(strokeDasharray * 2);
  });

  it('prefixCls', () => {
    const wrapper = mount(zaProgress, {
      propsData: {
        prefixCls: 'my-progress',
      },
    });
    expect(wrapper.find('.my-progress').exists()).toBe(true);
  });

  it('shape', () => {
    const wrapper = mount(zaProgress, {
      propsData: {
        weight: 10,
        shape: 'round',
      },
    });
    const {
      vm
    } = wrapper;
    expect(vm.$el.querySelector('.za-progress__inner').style.borderRadius).toEqual('10px');
  });

  it('weight', () => {
    const wrapper = mount(zaProgress, {
      propsData: {
        weight: 12,
      },
    });
    const {
      vm
    } = wrapper;
    expect(vm.$el.querySelector('.za-progress__inner').style.height).toEqual('12px');
  });

  it('theme', () => {
    const wrapper = mount(zaProgress, {
      propsData: {
        theme: 'info',
      },
    });
    expect(wrapper.find('.za-progress--info').exists()).toBe(true);
  });
});
