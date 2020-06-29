import zaTabs from '@/tabs';
import zaTabPanel from '@/tab-panel';
import { mount } from '../util';

describe('Tabs', () => {
  it('create', () => {
    const wrapper = mount(zaTabs, {
      propsData: {
        prefixCls: 'za-tabs',
        theme: 'primary',
      },
    });

    const { vm } = wrapper;
    const el = vm.$el;
    expect(el.classList.contains('za-tabs')).toBe(true);
    expect(el.classList.contains('za-tabs--primary')).toBe(true);
  });


  it('change active tab', done => {
    let result;
    const TestCompo = {
      components: {
        zaTabs,
        zaTabPanel,
      },
      template: `
        <za-tabs v-model="activeName" @change="handleClick">
          <za-tab-panel label='用户管理' name='first'>
            <div class='content'>用户管理</div>
          </za-tab-panel>
          <za-tab-panel label='配置管理' name='second'>
            <div class='content'>配置管理</div>
          </za-tab-panel>
          <za-tab-panel label='角色管理' name='third'>
            <div class='content'>角色管理</div>
          </za-tab-panel>
        </za-tabs>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
      data() {
        return {
          activeName: 'first',
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$nextTick(() => {
      vm.$el.querySelectorAll('.za-tabs__header-item')[1].click();
      expect(result).not.toBeUndefined();
      expect(vm.activeName === 'second').toBe(true);
      done();
    });
  });
});
