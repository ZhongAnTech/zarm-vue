import Collapse from '@/collapse';
import { createTest, createVue, destroyVM } from '../util';

describe('collapse', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Collapse, {
      prefixCls: 'za-collapse',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(el.querySelector('.za-collapse')).to.exsit;
    });
  });

  it('change', () => {
    let index;
    vm = createVue({
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
    }, true);
    const titleEl = vm.$el.querySelector('.za-collapse-item-title');
    titleEl.click();
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(index).to.equal('0');
    });
  });

  it('activeKey', done => {
    vm = createTest(Collapse, {
      defaultActiveKey: ['0'],
    }, true);
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      setTimeout(() => {
        expect(vm.activeKey[0]).to.exsit;
        expect(vm.activeKey[0] === '0').to.be.true;
        done();
      }, 20);
    });
  });

  it('defaultActiveKey', () => {
    vm = createVue({
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
    }, true);
    const el = vm.$el;
    const item = el.querySelectorAll('.za-collapse-item');
    const activeArr = vm.defaultActive;
    activeArr.forEach((arr, index) => {
      expect(item[index].classList.contains('active')).to.be.true;
    });
  });

  it('multiple', () => {
    vm = createVue({
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
    }, true);
    const item = vm.$el.querySelectorAll('.za-collapse-item-title');
    item[1].click();
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      const curActiveItem = vm.$el.querySelectorAll('.za-collapse-item')[1];
      expect(curActiveItem.classList.contains('active')).to.be.true;
    });
  });

  it('open', () => {
    vm = createVue({
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
      data() {
        return {
        };
      },
    }, true);
    const el = vm.$el;
    const item = el.querySelectorAll('.za-collapse-item');
    // 验证初始状态全部打开, 验证无箭头
    expect(item[0].classList.contains('active')).to.be.true;
    expect(item[0].querySelector('.za-collapse-item-arrow').classList.contains('za-collapse-item-arrow-hidden')).to.be.true;
    // 验证点击后不收缩
    item[0].click();
    expect(item[0].classList.contains('active')).to.be.true;
  });
});
