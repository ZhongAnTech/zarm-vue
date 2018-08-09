import zaSearchBar from '@/search-bar';
import { mount } from '../util';

describe('SearchBar', () => {

  it('create', () => {
    const wrapper = mount(zaSearchBar, {
      propsData: {
        prefixCls: 'za-search-bar',
      },
    });
    expect(wrapper.contains('.za-search-bar')).toBe(true);
  });

  it('shape', () => {
    const wrapper = mount(zaSearchBar, {
      propsData: {
        prefixCls: 'za-search-bar',
        shape: 'round',
      },
    });
    expect(wrapper.contains('.shape-round')).toBe(true);
  });

  it('placeholder', done => {
    const wrapper = mount(zaSearchBar, {
      propsData: {
        prefixCls: 'za-search-bar',
      },
    });
    const { vm } = wrapper;
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      setTimeout(() => {
        const placholderText = el.querySelector('.za-search-bar-mock-placeholder').innerHTML;
        expect(placholderText).toEqual('搜索');
        done();
      }, 20);
    });
  });

  it('clear', done => {
    let result;
    const TestCompo = {
      components: {
        zaSearchBar,
      },
      template: `
        <za-search-bar placeholder="搜索" 
          shape="round"
          cancelText="取消" 
          :showCancel="true" 
          value="默认搜索关键字"
          @clear="handleClear"
        />
      `,
      methods: {
        handleClear(val) {
          result = val;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.find('.za-input-clear').trigger('click');
    vm.$nextTick(() => {
      vm.$nextTick(() => {
        expect(result).toEqual('');
        done();
      });
    });
  });

  it('cancel', done => {
    const TestCompo = {
      components: {
        zaSearchBar,
      },
      template: `
        <za-search-bar placeholder="搜索" 
          shape="round"
          cancelText="取消" 
          :showCancel="true" 
          value="默认搜索关键字"
        />
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const el = vm.$el;
    wrapper.find('.za-input-clear').trigger('click');
    vm.$nextTick(() => {
      vm.$nextTick(() => {
        const searchInputEl = el.querySelector('input[type="search"]')
        expect(searchInputEl.value).toEqual('');
        done();
      });
    });
  });
});
