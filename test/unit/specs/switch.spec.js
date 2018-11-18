import zaSwitch from '@/switch';
import { mount } from '../util';

describe('Switch', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaSwitch,
      },
      template: `
        <za-switch theme='success' size='lg' disabled defaultChecked></za-switch>
      `,
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    expect(vm.$el.classList.contains('za-switch')).toBe(true);
    expect(vm.$el.classList.contains('theme-success')).toBe(true);
    expect(vm.$el.classList.contains('size-lg')).toBe(true);
    expect(vm.$el.classList.contains('disabled')).toBe(true);
    expect(vm.$el.classList.contains('checked')).toBe(true);
  });
  
  it('switchOn', () => {
    const TestCompo = {
      components: {
        zaSwitch,
      },
      template: `
        <za-switch v-model='switch1'></za-switch>
      `,
      data() {
        return {
          switch1: true,
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(vm.$el.classList.contains('checked')).toBe(true);
  });
  it('switchOff', () => {
    const TestCompo = {
      components: {
        zaSwitch,
      },
      template: `
        <za-switch v-model='switch2'></za-switch>
      `,
      data() {
        return {
          switch1: false,
        };
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(vm.$el.classList.contains('checked')).not.toBe(true);
  });
  it('click', done => {
    let result;
    const TestCompo = {
      components: {
        zaSwitch,
      },
      template: `
        <za-switch v-model='switch1' @change='handleChange'></za-switch>
      `,
      data() {
        return {
          switch1: true,
        };
      },
      methods: {
        handleChange(evt) {
          result = evt;
        },
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.querySelector('input').click();
    vm.$nextTick(() => {
      expect(result).not.toBeUndefined();
      done();
    });
  });
  it('click && Switch is disabled', done => {
    let result;
    const TestCompo = {
      components: {
        zaSwitch,
      },
      template: `
        <za-switch v-model='switch1' @change='handleChange' disabled></za-switch>
      `,
      data() {
        return {
          switch1: true,
        };
      },
      methods: {
        handleChange(evt) {
          result = evt;
        },
      },
    };

    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.querySelector('input').click();
    vm.$nextTick(() => {
      expect(result).not.toBe(false);
      done();
    });
  });
  
});

