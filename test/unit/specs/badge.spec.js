import zaBadge from '@/badge';
import { mount } from '../util';

describe('Badge', () => {
  it('prefixCls', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        prefixCls: 'za-badge',
      },
    });
    expect(wrapper.contains('.za-badge')).toBe(true);
  });

  it('className', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        className: 'za-test',
      },
    });
    expect(wrapper.contains('.za-badge')).toBe(true);
  });

  it('theme', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        theme: 'error',
      },
    });
    expect(wrapper.contains('.za-badge--error')).toBe(true);
  });

  it('shape', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        shape: 'radius',
      },
    });
    expect(wrapper.contains('.za-badge--radius')).toBe(true);
  });

  it('sup', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        sup: true,
      },
    });
    expect(wrapper.contains('.za-badge__sup--up')).toBe(true);
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
