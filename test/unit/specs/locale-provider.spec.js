import zaLocaleProvider from '@/locale-provider';
import zaSearchBar from '@/search-bar';
import { mount } from '../util';

describe('LocaleProvider', () => {
  it('create', () => {
    const wrapper = mount(zaLocaleProvider);

    const { vm } = wrapper;
    // expect(vm.$el).toMatchSnapshot();
    expect(wrapper.find('.za-locale-provider')).toBeTruthy();
  });

  it('set locale lang ZH_CN', done => {
    let result;
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
