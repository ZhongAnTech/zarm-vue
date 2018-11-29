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
          <za-collapse-item title="50元套餐" itemKey='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" itemKey='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" itemKey='2'>
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
    const TestCompo = {
      components: {
          zaCollapse,
          zaCollapseItem,
      },
      template: `
        <za-collapse :activeKey='activeKey' multiple>
          <za-collapse-item title="50元套餐" itemKey='1'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" itemKey='2'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" itemKey='3'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-collapse-item>
        </za-collapse>
        `,
        data() {
          return {
            activeKey: ['1', '2'],
          };
        },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const item = vm.$el.querySelectorAll('.za-collapse-item');
    const curActiveItem = vm.$el.querySelectorAll('.za-collapse-item')[2];
    vm.activeKey = ['1', '2', '3'];
    setTimeout(() => {
      expect(curActiveItem.classList.contains('active')).toBe(true);
      done();
    }, 20);
  });

  it('defaultActiveKey', () => {
    const TestCompo = {
      components: {
        zaCollapse,
        zaCollapseItem,
      },
      template: `
        <za-collapse :defaultActiveKey='defaultActive' multiple>
          <za-collapse-item title="50元套餐" itemKey='a'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" itemKey='b'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" itemKey='c'>
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
        <za-collapse multiple :defaultActiveKey='defaultActive'>
          <za-collapse-item title="50元套餐" itemKey='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" itemKey='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" itemKey='2'>
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

  it('disabled', () => {
    const TestCompo = {
      components: {
        zaCollapse,
        zaCollapseItem,
      },
      template: `
        <za-collapse defaultActiveKey='a'>
          <za-collapse-item title="50元套餐" disabled itemKey="a">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="100元套餐" itemKey="b">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-collapse-item>
          <za-collapse-item title="200元套餐" itemKey="c">
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
    // 验证点击后不收缩
    item[0].click();
    expect(item[0].classList.contains('active')).toBe(true);
  });
});
