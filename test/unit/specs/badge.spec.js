import zaBadge from '@/badge';
import { mount } from '../util';

describe('Badge', () => {
  it('prefixCls', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        prefixCls: 'za-badge',
      },
    });
    expect(wrapper.find('.za-badge').exists()).toBe(true);
  });

  it('className', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        className: 'za-test',
      },
    });
    expect(wrapper.find('.za-badge').exists()).toBe(true);
  });

  it('theme', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        theme: 'error',
      },
    });
    expect(wrapper.find('.za-badge--error').exists()).toBe(true);
  });

  it('shape', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        shape: 'radius',
      },
    });
    expect(wrapper.find('.za-badge--radius').exists()).toBe(true);
  });

  it('sup', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        sup: true,
      },
    });
    expect(wrapper.find('.za-badge__sup--up').exists()).toBe(true);
  });

  it('click', done => {
    let result;
    const TestCompo = {
      components: {
        zaBadge,
      },
      template: `
        <za-badge sup shape='round' text='999+' @click="handleClick">
          <div>test</div>
        </za-badge>
      `,
      methods: {
        handleClick() {
          result = 1;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector('.za-badge__sup').click();
    setTimeout(() => {
      expect(result).toEqual(1);
      done();
    }, 50);
  });
});
