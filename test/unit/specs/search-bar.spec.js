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

  it('event:cancel', done => {
    let result;
    let focus;
    const TestCompo = {
      components: {
        zaSearchBar,
      },
      template: `
        <za-search-bar
          placeholder="请输入内容"
          @cancel="handleCancel"
          @focus="handleFocus"
          :value="input">
        </za-search-bar>
      `,
      data() {
        return {
          input: 'a',
        };
      },
      methods: {
        handleCancel() {
          result = 1;
        },
        handleFocus() {
          focus = true
        }
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.setData({'focusStatus': true});
    vm.$nextTick(() => {
      wrapper.find('.za-search-bar-cancel').trigger('click');
      vm.$nextTick(() => {
        expect(result).not.toBeUndefined();
        done();
      });
    });
  });

  it('event:change', done => {
    let result;
    const TestCompo = {
      components: {
        zaSearchBar,
      },
      template: `
        <za-search-bar
          placeholder="请输入内容"
          @change="handleInput"
          :value="input">
        </za-search-bar>
      `,
      data() {
        return {
          input: 'a',
        };
      },
      methods: {
        handleInput() {
          result = 1;
        }
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.find('input').setValue('blur');
    vm.$nextTick(() => {
      expect(result).not.toBeUndefined();
      done();
    });
  });

  it('event:submit', done => {
    let result;
    const TestCompo = {
      components: {
        zaSearchBar,
      },
      template: `
        <za-search-bar
          placeholder="请输入内容"
          @submit="handleSubmit"
          ref="inputRef"
          :value="input">
        </za-search-bar>
      `,
      data() {
        return {
          input: 'a',
        };
      },
      methods: {
        handleSubmit() {
          result = true;
        }
      },
    };
    const wrapper = mount(TestCompo);
    wrapper.find('.za-search-bar-form').trigger('submit');
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(result).toBe(true);
      done();
    });
  });


});
