// import { createVue, destroyVM } from '../util';
import zaRadioGroup from '@/radio-group';
import zaRadio from '@/radio';
import { mount } from '../util';

describe('Radio', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaRadioGroup,
        zaRadio
      },
      template: `
        <za-radio-group theme='primary' type='button' shape='radius' v-model='radio' ref='radio'>
          <za-radio ref='a' value='a'>a</za-radio>
          <za-radio ref='b' value='b'>a</za-radio>
          <za-radio ref='c' value='c'>a</za-radio>
        </za-radio-group>
      `,
      data() {
        return {
          radio: '',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const el = vm.$el;
    expect(el.classList.contains('za-radio-group--radius')).toBe(true);
    expect(vm.$refs.a.$el.classList.contains('za-radio--primary')).toBe(true);
    expect(vm.$refs.a.$el.classList.contains('za-radio')).toBe(true);
    expect(vm.$refs.a.$el.classList.contains('za-button')).toBe(true);
  });

  it('disabled', () => {
    const TestCompo = {
      components: {
        zaRadioGroup,
        zaRadio
      },
      template: `
        <za-radio-group theme='primary' type='button' disabled>
          <za-radio ref='a' value='a'>a</za-radio>
          <za-radio ref='b' value='b'>b</za-radio>
          <za-radio ref='c' value='c'>c</za-radio>
        </za-radio-group>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(vm.$refs.a.$el.classList.contains('za-radio--disabled')).toBe(true);
  });

  it('default value', () => {
    const TestCompo = {
      components: {
        zaRadioGroup,
        zaRadio
      },
      template: `
        <za-radio-group theme='primary' type='button' v-model='radio'>
          <za-radio ref='a' value='a'>a</za-radio>
          <za-radio ref='b' value='b'>b</za-radio>
          <za-radio ref='c' value='c'>c</za-radio>
        </za-radio-group>
      `,
      data() {
        return {
          radio: 'a',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(vm.$refs.a.$el.classList.contains('za-radio--checked')).toBe(true);
  });

  it('click', done => {
    let result;
    const TestCompo = {
      components: {
        zaRadioGroup,
        zaRadio
      },
      template: `
        <za-radio-group theme='primary' type='button' v-model='radio' @change='handleChange'>
          <za-radio ref='a' value='a'>a</za-radio>
          <za-radio ref='b' value='b'>b</za-radio>
          <za-radio ref='c' value='c'>c</za-radio>
        </za-radio-group>
      `,
      methods: {
        handleChange(v) {
          result = v;
        },
      },
      data() {
        return {
          radio: '',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$refs.a.$el.querySelector('input').click();
    vm.$nextTick(() => {
      expect(vm.radio).toEqual('a');
      expect(result).toEqual('a');
      done();
    });
  });

});
