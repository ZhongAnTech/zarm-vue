import Test from '@/test';
import { mount } from '../util';

describe('Test', () => {
  it('test', () => {
    const wrapper = mount(Test, {
      propsData: {
        prefixCls: '',
      },
    });
    const { vm } = wrapper;
    expect(wrapper.contains()).toBe(true);
  });

  it('test', done => {
    let result;
    const TestCompo = {
      components: {
        Test,
      },
      template: `
        <Test></Test>
      `,
      methods: {
        handleClick() {
          result = 1;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelector().click();
    vm.$nextTick(() => {
      expect(result).toEqual(1);
      done();
    });
  });
});