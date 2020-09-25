import zaCell from '@/cell';
import zaIcon from '@/icon';
import { mount } from '../util';

describe('Cell', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaCell,
      },
      template: `
        <za-cell title='标题文字'>
          <div slot='description'>描述文字</div>
        </za-cell>
      `,
    };
    const wrapper = mount(TestCompo);
    expect(wrapper.find('.za-cell').exists()).toBe(true);
  });

  it('prefixCls', () => {
    const wrapper = mount(zaCell, {
      propsData: {
        prefixCls: 'za-cell-test',
      },
    });
    expect(wrapper.find('.za-cell-test').exists()).toBe(true);
  });

  it('title', () => {
    const wrapper = mount(zaCell, {
      propsData: {
        title: '测试',
      },
    });
    const el = wrapper.find('.za-cell__title');
    expect(el.text()).toEqual('测试');
  });

  it('theme', () => {
    const wrapper = mount(zaCell, {
      propsData: {
        theme: 'primary',
      },
    });
    expect(wrapper.find('.za-cell--primary').exists()).toBe(true);
  });

  it('disabled', () => {
    const wrapper = mount(zaCell, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.za-cell--disabled').exists()).toBe(true);
  });

  it('hasIcon', () => {
    const TestCompo = {
      components: {
        zaCell,
        zaIcon,
      },
      template: `
        <za-cell>
          <za-icon type='right' slot='icon'/>
        </za-cell>
      `,
    };
    const wrapper = mount(TestCompo);
    expect(wrapper.find('.za-icon-right').exists()).toBe(true);
  });

  it('click', done => {
    let result;
    const TestCompo = {
      components: {
        zaCell,
      },
      template: `
        <za-cell @click="handleClick">标题</za-cell>
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
