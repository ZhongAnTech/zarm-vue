import Keyboard from '@/keyboard';
import KeyboardPicker from '@/keyboard-picker';
import { mount } from '../util';

describe('Keyboard', () => {
  it('create number keyboard', () => {
    const wrapper = mount(KeyboardPicker, {
      propsData: {
        type: 'number',
      },
    });
    expect(wrapper.contains('.za-keyboard__item')).toBe(true);
  });

  it('create price keyboard', () => {
    const wrapper = mount(Keyboard, {
      type: 'price',
    });
    expect(wrapper.contains('.za-keyboard__item')).toBe(true);
  });

  it('create idcard keyboard', () => {
    const wrapper = mount(Keyboard, {
      type: 'idcard',
    });
    expect(wrapper.contains('.za-keyboard__item')).toBe(true);
  });

  it('create keyboard picker', () => {
    const wrapper = mount(KeyboardPicker, {
      type: 'number',
      visible: true,
    });
    expect(wrapper.contains('.za-keyboard__item')).toBe(true);
  });

  it('click 1 key', () => {
    let result;
    const TestCompo = {
      components: {
        ZaKeyboard: Keyboard,
      },
      template: `
        <za-keyboard @keyClick='handleClick'/>
      `,
      methods: {
        handleClick(key) {
          result = key;
        },
      },
    };
    const wrapper = mount(TestCompo);
    wrapper.find('.za-keyboard__item').trigger('click');
    expect(result).toBe('1');
  });

  it('click ok key', () => {
    let result;
    const TestCompo = {
      components: {
        ZaKeyboard: Keyboard,
      },
      template: `
        <za-keyboard @keyClick='handleClick'/>
      `,
      methods: {
        handleClick(key) {
          result = key;
        },
      },
    };
    const wrapper = mount(TestCompo);
    wrapper.find('.za-keyboard__item--ok').trigger('click');
    expect(result).toBe('ok');
  });
});
