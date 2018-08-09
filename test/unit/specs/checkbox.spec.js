import zaCheckbox from '@/checkbox';
import zaCheckboxGroup from '@/checkbox-group';
import { mount } from '../util';

describe('Checkbox', () => {
  it('create single', () => {
    const wrapper = mount(zaCheckbox, {
      propsData: {
        prefixCls: 'za-checkbox',
      },
    });
    expect(wrapper.contains('.za-checkbox')).toBe(true);
  });

  it('theme single', () => {
    const wrapper = mount(zaCheckbox, {
      propsData: {
        theme: 'primary',
        type: 'button',
      },
    });
    expect(wrapper.contains('.theme-primary')).toBe(true);
  });

  it('type cell', () => {
    const wrapper = mount(zaCheckbox, {
      propsData: {
        type: 'cell',
      },
    });
    expect(wrapper.contains('.za-cell')).toBe(true);
  });

  it('single with click', done => {
    const wrapper = mount(zaCheckbox, {
      propsData: {
        type: 'cell',
      },
    });
    const { vm } = wrapper;
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.model).toEqual(true);
      done();
    });
  });

  it('disabled', () => {
    const wrapper = mount(zaCheckbox, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.contains('.disabled')).toBe(true);
  });

  it('group create', () => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup' @change='handleGroupChange'>
          <za-checkbox v-for='(city, index) in cities' :label="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
        </za-checkbox-group>
      `,
      data() {
        return {
          cities: ['上海', '北京', '广州', '深圳'],
          checkboxGroup: [],
        };
      },
      methods: {
        handleGroupChange() {

        },
      },
    };
    const wrapper = mount(TestCompo);
    expect(wrapper.contains('.za-checkbox-group')).toBe(true);
  });

  it('group shape type theme block', () => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup' @change='handleGroupChange' shape='radius' type='button' theme='primary' block>
          <za-checkbox v-for='(city, index) in cities' :label="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
        </za-checkbox-group>
      `,
      data() {
        return {
          cities: ['上海', '北京', '广州', '深圳'],
          checkboxGroup: [],
        };
      },
      methods: {
        handleGroupChange() {

        },
      },
    };
    const wrapper = mount(TestCompo);
    expect(wrapper.contains('.shape-radius')).toBe(true);
    expect(wrapper.contains('.block')).toBe(true);
    expect(wrapper.contains('.za-button.theme-primary')).toBe(true);
  });

  it('group type=cell with click and unclick', done => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup' @change='handleGroupChange' shape='radius' type='cell'>
          <za-checkbox v-for='(city, index) in cities' :label="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
        </za-checkbox-group>
      `,
      data() {
        return {
          cities: ['上海', '北京', '广州', '深圳'],
          checkboxGroup: [],
        };
      },
      methods: {
        handleGroupChange() {

        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.find('.za-cell-inner').trigger('click');
    vm.$nextTick(() => {
      expect(vm.checkboxGroup.indexOf('上海')).toEqual(0);
      wrapper.find('.za-cell-inner').trigger('click');
      vm.$nextTick(() => {
        expect(vm.checkboxGroup.indexOf('上海')).toEqual(-1);
        done();
      });
    });
  });

  it('group default check', () => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup'>
          <za-checkbox v-for='(city, i) in cities' :label="city" :key="city" :disabled='i === 2'>
            {{city}}
          </za-checkbox>
        </za-checkbox-group>
      `,
      data() {
        return {
          cities: ['上海', '北京', '广州', '深圳'],
          checkboxGroup: ['上海'],
        };
      },
      methods: {
        handleGroupChange() {

        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const firstCheckbox = vm.$el.querySelector('.za-checkbox-input');
    expect(firstCheckbox.checked).toBe(true);
  });

  it('change', done => {
    let result;
    const TestCompo = {
      components: {
        zaCheckbox,
      },
      template: `
        <za-checkbox v-model='v1' @change='handleChange'>单独使用</za-checkbox>
      `,
      data() {
        return {
          v1: false,
        };
      },
      methods: {
        handleChange() {
          result = 1;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.find('.za-checkbox-input').trigger('click');
    vm.$nextTick(() => {
      const firstCheckbox = vm.$el.querySelector('.za-checkbox-input');
      expect(wrapper.contains('.checked')).toBe(true);
      expect(firstCheckbox.checked).toBe(true);
      expect(vm.v1).toBe(true);
      expect(result).toEqual(1);
      done();
    });
  });

  it('group to be true', done => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup'>
          <za-checkbox label="a" ref="a">a</za-checkbox>
          <za-checkbox label="b" ref="b">b</za-checkbox>
        </za-checkbox-group>
      `,
      data() {
        return {
          checkboxGroup: [],
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(vm.$refs.a.isGroup).toBe(true);
    wrapper.find('.za-checkbox-input').trigger('click');
    vm.$nextTick(() => {
      expect(vm.checkboxGroup.indexOf('a') !== -1).toBe(true);
      done();
    });
  });
});
