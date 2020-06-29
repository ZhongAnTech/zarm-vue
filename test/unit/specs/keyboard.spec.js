import Keyboard from '@/keyboard';
import KeyboardPicker from '@/keyboard-picker';
import { mount } from '../util';

describe('Keyboard', () => {
  it('create number keyboard', () => {
    const wrapper = mount(Keyboard, {
      propsData: {
        type: 'number',
      },
    });
    expect(wrapper.find('.za-keyboard').exists()).toBe(true);
  });

  it('create price keyboard', () => {
    const wrapper = mount(Keyboard, {
      type: 'price',
    });
    expect(wrapper.contains('.za-keyboard')).toBe(true);
  });

  it('create idcard keyboard', () => {
    const wrapper = mount(Keyboard, {
      type: 'idcard',
    });
    expect(wrapper.find('.za-keyboard').exists()).toBe(true);
  });

  it('create keyboard picker', (done) => {
    const wrapper = mount({
      components: {
        ZaKeyboardPicker: KeyboardPicker,
      },
      template: `
        <div @click="visible1 = true">
          <div ref="btn"
            >开启</div
          >
          <za-keyboard-picker
            :visible.sync="visible1"
            type="number"
          ></za-keyboard-picker>
        </div>
      `,
      data() {
        return {
          visible1: false,
        };
      },
    });
    const { vm } = wrapper;
    vm.$el.click();
    vm.$nextTick(() => {
      expect(wrapper.find('.za-keyboard').exists()).toBe(true);
      done();
    });
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
