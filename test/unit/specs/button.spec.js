import zaButton from '@/button';
import { mount } from '../util';

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        theme: 'primary',
      },
    });
    expect(wrapper.contains('.theme-primary')).toBe(true);
  });

  it('prefixCls', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        prefixCls: 'za-button-test',
      },
    });
    expect(wrapper.contains('.za-button-test')).toBe(true);
  });

  it('size', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        size: 'xl',
      },
    });
    expect(wrapper.contains('.size-xl')).toBe(true);
  });

  it('shape', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        shape: 'radius',
      },
    });
    expect(wrapper.contains('.shape-radius')).toBe(true);
  });

  it('block', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        block: true,
      },
    });
    expect(wrapper.contains('.block')).toBe(true);
  });

  it('bordered', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        bordered: true,
      },
    });
    expect(wrapper.contains('.bordered')).toBe(true);
  });

  it('active', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        active: true,
      },
    });
    expect(wrapper.contains('.active')).toBe(true);
  });

  it('focus', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        focus: true,
      },
    });
    expect(wrapper.contains('.focus')).toBe(true);
  });

  it('disabled', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.contains('.disabled')).toBe(true);
  });

  it('loading', () => {
    const wrapper = mount(zaButton, {
      propsData: {
        loading: true,
      },
    });
    expect(wrapper.contains('.rotate360')).toBe(true);
  });

  it('click', done => {
    let result;
    const TestCompo = {
      components: {
        zaButton,
      },
      template: `
        <za-button @click="handleClick"></za-button>
      `,
      methods: {
        handleClick() {
          result = 1;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    setTimeout(() => {
      expect(result).toEqual(1);
      done();
    }, 20);
  });
});
