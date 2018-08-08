import zaConfirm from '@/confirm';
import { mount } from '../util';

const $zaConfirm = zaConfirm.root;

describe('Confirm', () => {
  it('open and close', done => {
    const TestCompo = {
      components: {
        zaConfirm,
      },
      template: `
        <za-confirm :visible.sync='visible' title="确认信息" message="你确定要这样做吗？" :ok='handleOk' :cancel='handleCancel'></za-confirm>
      `,
      methods: {
        handleOk() {
        },
        handleCancel() {
          this.visible = false;
        },
      },
      data() {
        return {
          visible: true,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    document.querySelectorAll('.za-button')[0].click();
    vm.$nextTick(() => {
      expect(vm.visible).toBe(false);
      done();
    });
  });

  it('$zaConfirm cancel', done => {
    const TestCompo = {
      components: {
        zaConfirm,
      },
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          $zaConfirm({ message: 'test' });
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    setTimeout(() => {
      document.querySelectorAll('.za-button')[0].click();
      expect(document.querySelector('.za-modal')).toBeTruthy();
      done();
    }, 100);
  });

  it('$zaConfirm ok', done => {
    const TestCompo = {
      components: {
        zaConfirm,
      },
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          $zaConfirm({ message: 'test' });
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    setTimeout(() => {
      document.querySelectorAll('.za-button')[0].click();
      expect(document.querySelector('.za-modal')).toBeTruthy();
      done();
    }, 100);
  });

  it('$zaConfirm click ok not close', done => {
    const TestCompo = {
      components: {
        zaConfirm,
      },
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          $zaConfirm({ message: 'test' });
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    setTimeout(() => {
      document.querySelectorAll('.za-button')[0].click();
      expect(document.querySelector('.za-modal')).toBeTruthy();
      done();
    }, 100);
  });

  it('$zaConfirm with VNode', done => {
    const TestCompo = {
      components: {
        zaConfirm,
      },
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          const h = this.$createElement;
          const message = h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode'),
          ]);
          $zaConfirm(message);
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    setTimeout(() => {
      document.querySelectorAll('.za-button')[0].click();
      expect(document.querySelector('.za-modal')).toBeTruthy();
      done();
    }, 100);
  });
});
