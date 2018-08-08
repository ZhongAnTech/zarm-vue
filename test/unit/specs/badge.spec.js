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

  it('theme', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        theme: 'info',
      },
    });
    expect(wrapper.contains('.theme-info')).toBe(true);
  });

  it('shape', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        shape: 'radius',
      },
    });
    expect(wrapper.contains('.shape-radius')).toBe(true);
  });

  it('sup', () => {
    const wrapper = mount(zaBadge, {
      propsData: {
        sup: true,
      },
    });
    expect(wrapper.contains('.za-badge-sup-up')).toBe(true);
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
    vm.$el.querySelector('.za-badge-sup').click();
    setTimeout(() => {
      expect(result).toEqual(1);
      done();
    }, 50);
  });
});
