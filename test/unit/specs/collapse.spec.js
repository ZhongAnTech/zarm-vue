import zaCollapse from '@/collapse';
import zaCollapseItem from '@/collapse-item';
import { mount } from '../util';

describe('collapse', () => {
  it('create zaCollapse', () => {
    const wrapper = mount(zaCollapse, {
      propsData: {
        prefixCls: 'za-collapse',
      },
    });
    expect(wrapper.contains('.za-collapse')).toBe(true);
  });

  it('change', () => {
    let index;
    const TestCompo = {
      components: {
        zaCollapse,
        zaCollapseItem,
      },
      template: `
        <za-collapse @change='handleClick'>
          <za-collapse-item title="50元套餐" activeKey='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" activeKey='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" activeKey='2'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-collapse-item>
        </za-collapse>
      `,
      methods: {
        handleClick(n) {
          index = n;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const titleEl = wrapper.find('.za-collapse-item-title');
    titleEl.trigger('click');
    vm.$nextTick(() => {
      expect(index).toEqual('0');
    });
  });

  it('activeKey', done => {
    const wrapper = mount(zaCollapse, {
      propsData: {
        defaultActiveKey: ['0'],
      },
    });
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.activeKey[0] === '0').toBe(true);
      done();
    });
  });

  it('defaultActiveKey', () => {
    const TestCompo = {
      components: {
        zaCollapse,
        zaCollapseItem,
      },
      template: `
        <za-collapse :defaultActiveKey='defaultActive'>
          <za-collapse-item title="50元套餐" activeKey='a'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" activeKey='b'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" activeKey='c'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-collapse-item>
        </za-collapse>
      `,
      data() {
        return {
          defaultActive: ['a', 'b'],
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const item = vm.$el.querySelectorAll('.za-collapse-item');
    const activeArr = vm.defaultActive;
    activeArr.forEach((arr, index) => {
      expect(item[index].classList.contains('active')).toBe(true);
    });
  });

  it('multiple', () => {
    const TestCompo = {
      components: {
        zaCollapse,
        zaCollapseItem,
      },
      template: `
        <za-collapse :multiple='true' :defaultActiveKey='defaultActive'>
          <za-collapse-item title="50元套餐" activeKey='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" activeKey='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" activeKey='2'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-collapse-item>
        </za-collapse>
      `,
      data() {
        return {
          defaultActive: ['0'],
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const item = vm.$el.querySelectorAll('.za-collapse-item-title');
    item[1].click();
    vm.$nextTick(() => {
      const curActiveItem = vm.$el.querySelectorAll('.za-collapse-item')[1];
      expect(curActiveItem.classList.contains('active')).toBe(true);
    });
  });

  it('open', () => {
    const TestCompo = {
      components: {
        zaCollapse,
        zaCollapseItem,
      },
      template: `
        <za-collapse open>
          <za-collapse-item title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐">
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-collapse-item>
      </za-collapse>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const el = vm.$el;
    const item = el.querySelectorAll('.za-collapse-item');
    // 验证初始状态全部打开, 验证无箭头
    expect(item[0].classList.contains('active')).toBe(true);
    expect(item[0].querySelector('.za-collapse-item-arrow').classList.contains('za-collapse-item-arrow-hidden')).toBe(true);
    // 验证点击后不收缩
    item[0].click();
    expect(item[0].classList.contains('active')).toBe(true);
  });
});
