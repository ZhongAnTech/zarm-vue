import zaLocaleProvider from '@/locale-provider';
import zaSearchBar from '@/search-bar';
import { mount } from '../util';

describe('LocaleProvider', () => {
  it('create', () => {
    const wrapper = mount(zaLocaleProvider, {
      propsData: {
        lang: 'ZH_CN',
      },
    });
    expect(wrapper.find('.za-locale-provider').exists()).toBe(true);
  });

  it('set locale lang ZH_CN', done => {
    const TestCompo = {
      components: {
        zaSearchBar,
        zaLocaleProvider,
      },
      template: `
        <za-locale-provider lang="zh_CN">
          <za-search-bar
            shape="round"
            ref="searchRef"
          ></za-search-bar>
        </za-locale-provider>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      const cancelText = wrapper.find('.za-search-bar__cancel').text();
      expect(cancelText === '取消').toBeTruthy();
      done();
    });
  });
});
