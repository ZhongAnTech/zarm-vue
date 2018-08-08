import zaSwipeAction from '@/swipe-action';
import { mount } from '../util';
import { dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from '../touchs';

describe('SwipeAction', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaSwipeAction,
      },
      template: `
        <za-swipe-action
        theme='primary'
        autoClose
        :right="action1">
        <za-cell>左滑看看</za-cell>
      </za-swipe-action>
      `,
      data() {
        return {
          action1: [
            {
              theme: 'error',
              text: '右按钮1',
              onClick: () => {},
            },
            {
              theme: 'success',
              text: '右按钮2',
              onClick: () => {},
            },
          ],
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    expect(vm.$el.classList.contains('za-swipeAction')).toBe(true);
    vm.$destroy();
  });

  it('btn click', done => {
    let result;

    const TestCompo = {
      components: {
        zaSwipeAction,
      },
      template: `
        <za-swipe-action
        theme='primary'
        autoClose
        :right="action1">
        <za-cell>左滑看看</za-cell>
      </za-swipe-action>
      `,
      data() {
        return {
          action1: [
            {
              theme: 'error',
              text: '右按钮1',
              onClick: () => {
                result = 'isClicked';
              },
            },
            {
              theme: 'success',
              text: '右按钮2',
              onClick: () => {},
            },
          ],
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    const el = vm.$el;
    el.querySelector('.theme-error').click();
    vm.$nextTick(() => {
      expect(result).toEqual('isClicked');
      done();
    });
  });

  it('disabled', done => {
    const TestCompo = {
      components: {
        zaSwipeAction,
      },
      template: `
        <za-swipe-action
        theme='primary'
        disabled
        :left="action1">
        <za-cell>左滑看看</za-cell>
      </za-swipe-action>
      `,
      data() {
        return {
          action1: [
            {
              theme: 'error',
              text: '右按钮1',
              onClick: () => {},
            },
            {
              theme: 'success',
              text: '右按钮2',
              onClick: () => {},
            },
          ],
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    const content = vm.$el.querySelector('.za-swipeAction-content');
    dispatchTouchStart(content, {
      pageX: 10,
      pageY: 10,
    });
    dispatchTouchMove(content, {
      pageX: -300,
      pageY: 10,
    });
    dispatchTouchEnd(content, {
      pageX: -300,
      pageY: 10,
    });
    vm.$nextTick(() => {
      done();
    });
  });

  it('drag move left', done => {
    const TestCompo = {
      components: {
        zaSwipeAction,
      },
      template: `
        <za-swipe-action
        theme='primary'
        autoClose
        :right="action1">
        <za-cell>左滑看看</za-cell>
      </za-swipe-action>
      `,
      data() {
        return {
          action1: [
            {
              theme: 'error',
              text: '右按钮1',
              onClick: () => {},
            },
            {
              theme: 'success',
              text: '右按钮2',
              onClick: () => {},
            },
          ],
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const content = vm.$el.querySelector('.za-swipeAction-content');
    dispatchTouchStart(content, {
      pageX: 10,
      pageY: 10,
    });
    dispatchTouchMove(content, {
      pageX: -300,
      pageY: 10,
    });
    dispatchTouchEnd(content, {
      pageX: -300,
      pageY: 10,
    });
    vm.$nextTick(() => {
      done();
    });
  });

  it('drag move right', done => {
    const TestCompo = {
      components: {
        zaSwipeAction,
      },
      template: `
        <za-swipe-action
        theme='primary'
        autoClose
        :left="action1">
        <za-cell>左滑看看</za-cell>
      </za-swipe-action>
      `,
      data() {
        return {
          action1: [
            {
              theme: 'error',
              text: '右按钮1',
              onClick: () => {},
            },
            {
              theme: 'success',
              text: '右按钮2',
              onClick: () => {},
            },
          ],
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    const content = vm.$el.querySelector('.za-swipeAction-content');
    dispatchTouchStart(content, {
      pageX: 10,
      pageY: 10,
    });
    dispatchTouchMove(content, {
      pageX: 300,
      pageY: 10,
    });
    dispatchTouchEnd(content, {
      pageX: 300,
      pageY: 10,
    });
    vm.$nextTick(() => {
      done();
    });
  });
});
