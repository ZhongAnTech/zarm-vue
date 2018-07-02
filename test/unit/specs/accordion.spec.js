import Accordion from '@/accordion';
import { createTest, createVue, destroyVM } from '../util';

describe('Accordion', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Accordion, {
      prefixCls: 'za-accordion',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(el.querySelector('.za-accordion')).to.exsit;
    });
  });

  it('change', () => {
    let index;
    vm = createVue({
      template: `
        <za-accordion @change='handleClick'>
          <za-accordion-item title="50元套餐" aiTag='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="100元套餐" aiTag='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="200元套餐" aiTag='2'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-accordion-item>
        </za-accordion>
      `,
      methods: {
        handleClick(n) {
          index = n;
        },
      },
    }, true);
    const titleEl = vm.$el.querySelector('.za-accordion-item-title');
    titleEl.click();
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(index).to.equal('0');
    });
  });

  it('activeTag', done => {
    vm = createTest(Accordion, {
      prefixCls: 'za-accordion',
      defaultActiveTag: ['0'],
    }, true);
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(vm.activeTag[0]).to.exsit;
      expect(vm.activeTag[0] === '0').to.be.true;
      done();
    });
  });

  it('animated', () => {
    vm = createVue({
      template: `
        <za-accordion animated>
          <za-accordion-item title="50元套餐" aiTag='0'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="100元套餐" aiTag='1'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="200元套餐" aiTag='2'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-accordion-item>
        </za-accordion>
      `,
    }, true);
    const el = vm.$el;

    expect(el.querySelector('.za-accordion-item')).to.exist;
    expect(el.querySelector('.za-accordion-item-content')).to.exist;

    const itemContent = el.querySelector('.za-accordion-item-content');
    expect(itemContent.classList.contains('za-accordion-item-content-anim')).to.be.true;
  });

  it('defaultActiveTag', () => {
    vm = createVue({
      template: `
        <za-accordion animated :defaultActiveTag='defaultActive'>
          <za-accordion-item title="50元套餐" aiTag='1'>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="100元套餐" aiTag='2'>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="200元套餐" aiTag='3'>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-accordion-item>
        </za-accordion>
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
      expect(item[index].classList.contains('active')).to.be.true;
    });
  });

  it('multiple', done => {
    vm = createVue({
      template: `
        <zaAccordion animated  :multiple='true' :defaultActiveTag='defaultActive'>
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
          defaultActive: ['0'],
        };
      },
    }, true);
    const item = vm.$el.querySelectorAll('.za-accordion-item-title');
    item[1].click();
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      const curActiveItem = vm.$el.querySelectorAll('.za-accordion-item')[1];
      expect(curActiveItem.classList.contains('active')).to.be.true;
      done();
    });
  });

  it('open', () => {
    vm = createVue({
      template: `
        <za-accordion open>
          <za-accordion-item title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="100元套餐">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </za-accordion-item>
          <za-accordion-item title="200元套餐">
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </za-accordion-item>
        </za-accordion-item>
      </za-accordion>
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
    // 验证点击后不收缩
    item[0].click();
    expect(item[0].classList.contains('active')).to.be.true;
  });
});
