import zaSwitch from '@/switch';
import {mount} from '../util';
describe('Switch', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaSwitch,
      },
      template: `
        <za-switch theme='success' size='lg' ></za-switch>
      `,
    };
  
    const wrapper = mount(TestCompo);
    const {vm} = wrapper;
    
    expect(vm.$el.classList.contains('za-switch')).toBe(true);
    expect(vm.$el.classList.contains('theme-success')).toBe(true);
    expect(vm.$el.classList.contains('size-lg')).toBe(true);
  });
  
  it('default', () => {
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
    const {vm} = wrapper;
    expect(vm.$el.classList.contains('checked')).toBe(true);
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
    const {vm} = wrapper;
    
    vm.$el.querySelector('input').click();
    vm.$nextTick(() => {
      expect(result).not.toBeUndefined();
      done();
    });
  });
  
});
