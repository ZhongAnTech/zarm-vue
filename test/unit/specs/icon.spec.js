import zaIcon from '@/icon';
import { mount } from '../util';

describe('Icon', () => {
  it('create', () => {
    const wrapper = mount(zaIcon, {
      propsData: {
        prefixCls: 'za-icon',
        theme: 'primary',
      },
    });
    expect(wrapper.find('.za-icon').exists()).toBe(true);
    expect(wrapper.find('.za-icon--primary').exists()).toBe(true);
  });

  it('click', done => {
    let result;
    const TestCompo = {
      components: {
        zaIcon,
      },
      template: `
        <za-icon theme="primary" type='right' @click='handleClick'/>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    vm.$nextTick(() => {
      expect(result).not.toBeUndefined();
      done();
    });
  });
});
