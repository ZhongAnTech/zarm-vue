import zaTabBar from '@/tab-bar';
import zaTabBarItem from '@/tab-bar-item';
import { mount } from '../util';

describe('TabBar', () => {
  it('create', () => {
    const wrapper = mount(zaTabBar, {
      propsData: {
        prefixCls: 'za-tab-bar',
      },
    });
    expect(wrapper.find('.za-tab-bar').exists()).toBe(true);
    wrapper.destroy();
  });

  it('tabbar-item', () => {
    const TestCompo = {
      components: {
        zaTabBar,
        zaTabBarItem,
      },
      template: `
        <za-tab-bar :visible="visible" :defaultActiveKey="1" @change="handleChange">
          <za-tab-bar-item :item-key="1" title="首页">
          </za-tab-bar-item>
          <za-tab-bar-item :item-key="2" title="保险">
          </za-tab-bar-item>
          <za-tab-bar-item :item-key="3" title="用户">
          </za-tab-bar-item>
        </za-tab-bar>
      `,
      data() {
        return {
          activeKey: 1,
          visible: true,
        };
      },
      methods: {
        toggle() {
          this.visible = !this.visible;
        },
        handleChange() { },
      },
    };
    const wrapper = mount(TestCompo);
    expect(wrapper.find('.za-tab-bar').exists()).toBe(true);
    wrapper.destroy();
  });
});
