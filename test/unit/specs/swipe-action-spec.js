import { createVue, destroyVM } from '../util';

describe('SwipeAction', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
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
    }, true);
    expect(vm.$el.classList.contains('za-swipeAction-wrap')).to.true;
  });
});
