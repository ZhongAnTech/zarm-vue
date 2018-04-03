import Accordion from '@/accordion';
import { createTest, createVue, destroyVM } from '../util';

describe('Accordion', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create single', () => {
    vm = createTest(Accordion, {
      prefixCls: 'za-accordion',
    }, true);
    const el = vm.$el;
    vm.$nextTick(_ => { // eslint-disable-line no-unused-vars
      expect(el.querySelector('.za-accordion')).to.exsit;
    });
  });

  it('accordion default', () => {
    let index;
    vm = createVue({
      template: `
        <zaAccordion @change='onChange'>
          <zaAccordionItem title="50元套餐" aiTag='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="100元套餐" aiTag='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="200元套餐" aiTag='2'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </zaAccordionItem>
        </zaAccordion>
      `,
      data() {
        return {
        };
      },
      methods: {
        onChange(n) {
          index = n;
        },
      },
    }, true);
    const el = vm.$el;
    const input = vm.$el.querySelector('.za-accordion-item');
    input.click();

    vm.$nextTick(_ => { // eslint-disable-line no-unused-vars
      expect(el.classList.contains('active')).to.be.true;
      expect(index).to.exist;
    });
  });

  it('accordion animated', () => {
    vm = createVue({
      template: `
        <zaAccordion :multiple='false' animated>
          <zaAccordionItem title="50元套餐" aiTag='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="100元套餐" aiTag='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="200元套餐" aiTag='2'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </zaAccordionItem>
        </zaAccordion>
      `,
    }, true);
    const el = vm.$el;

    expect(el.querySelector('.za-accordion-item')).to.exist;
    expect(el.querySelector('.za-accordion-item-content')).to.exist;

    const itemContent = el.querySelector('.za-accordion-item-content');
    expect(itemContent.classList.contains('za-accordion-item-content-anim')).to.be.true;
  });

  it('accordion defaultActive', () => {
    vm = createVue({
      template: `
        <zaAccordion animated :defaultActiveTag='defaultActive'>
          <zaAccordionItem title="50元套餐" aiTag='1'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="100元套餐" aiTag='2'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="200元套餐" aiTag='3'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </zaAccordionItem>
        </zaAccordion>
      `,
      data() {
        return {
          defaultActive: ['1', '2'],
        };
      },
    }, true);
    const el = vm.$el;
    const item = el.querySelectorAll('.za-accordion-item');
    const activeArr = vm.defaultActive;
    activeArr.forEach((arr, index) => {
      // expect(item[index].getAttribute('data-aiTag')).equal(arr);
      expect(item[index].classList.contains('active')).to.be.true;
    });
  });

  it('accordion setActive', () => {
    vm = createVue({
      template: `
        <zaAccordion animated :defaultActiveTag='defaultActive' :activeTag='active'>
          <zaAccordionItem title="50元套餐" aiTag='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="100元套餐" aiTag='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="200元套餐" aiTag='2'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </zaAccordionItem>
        </zaAccordion>
      `,
      data() {
        return {
          defaultActive: ['0', '1'],
          active: [0],
        };
      },
      methods: {
        changeActive() {
          const self = this;
          self.active = [1];
        },
      },
    }, true);
    const el = vm.$el;
    const item = el.querySelectorAll('.za-accordion-item');
    vm.changeActive();
    expect(vm.active[0]).equal(1);
    expect(item[0].classList.contains('active')).to.be.true;
  });

  it('accordion open', () => {
    vm = createVue({
      template: `
        <zaAccordion open>
          <zaAccordionItem title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="100元套餐">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </zaAccordionItem>
          <zaAccordionItem title="200元套餐">
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </zaAccordionItem>
        </zaAccordion>
      `,
      data() {
        return {
        };
      },
    }, true);
    const el = vm.$el;
    const item = el.querySelectorAll('.za-accordion-item');
    // 验证初始状态全部打开, 验证无箭头
    expect(item[0].classList.contains('active')).to.be.true;
    expect(item[0].querySelector('.za-accordion-item-arrow').classList.contains('za-accordion-item-arrow-hidden')).to.be.true;
    // expect(item[1].classList.contains('active')).to.be.true;
    // expect(item[2].classList.contains('active')).to.be.true;
    // 验证点击后不收缩
    item[0].click();
    expect(item[0].classList.contains('active')).to.be.true;
  });
});
