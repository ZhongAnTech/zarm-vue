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
    expect(wrapper.find('.za-checkbox').exists()).toBe(true);
  });

  it('theme single', () => {
    const wrapper = mount(zaCheckbox, {
      propsData: {
        theme: 'primary',
        type: 'button',
      },
    });
    expect(wrapper.find('.za-checkbox--primary').exists()).toBe(true);
  });

  it('type cell', () => {
    const wrapper = mount(zaCheckbox, {
      propsData: {
        type: 'cell',
      },
    });
    expect(wrapper.find('.za-cell').exists()).toBe(true);
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
    expect(wrapper.find('.za-checkbox--disabled').exists()).toBe(true);
  });

  it('group create', () => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup' @change='handleGroupChange'>
          <za-checkbox v-for='(city, index) in cities' :value="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
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
    expect(wrapper.find('.za-checkbox-group').exists()).toBe(true);
  });

  it('group shape type theme block', () => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup' @change='handleGroupChange' shape='radius' type='button' theme='primary' block>
          <za-checkbox v-for='(city, index) in cities' :value="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
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
    expect(wrapper.find('.za-checkbox-group--radius').exists()).toBe(true);
    expect(wrapper.find('.za-checkbox-group--block').exists()).toBe(true);
    expect(wrapper.find('.za-button--primary').exists()).toBe(true);
  });

  it('group type=cell with click and unclick', done => {
    const TestCompo = {
      components: {
        zaCheckbox,
        zaCheckboxGroup,
      },
      template: `
        <za-checkbox-group v-model='checkboxGroup' @change='handleGroupChange' shape='radius' type='cell'>
          <za-checkbox v-for='(city, index) in cities' :value="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
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
    wrapper.find('.za-cell__inner').trigger('click');
    vm.$nextTick(() => {
      expect(vm.checkboxGroup.indexOf('上海')).toEqual(0);
      wrapper.find('.za-cell__inner').trigger('click');
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
          <za-checkbox v-for='(city, i) in cities' :value="city" :key="city" :disabled='i === 2'>
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
    const firstCheckbox = vm.$el.querySelector('.za-checkbox__input');
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
    wrapper.find('.za-checkbox__input').trigger('click');
    vm.$nextTick(() => {
      const firstCheckbox = vm.$el.querySelector('.za-checkbox__input');
      expect(wrapper.find('.za-checkbox--checked').exists()).toBe(true);
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
          <za-checkbox value="a" ref="a">a</za-checkbox>
          <za-checkbox value="b" ref="b">b</za-checkbox>
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
    wrapper.find('.za-checkbox__input').trigger('click');
    vm.$nextTick(() => {
      expect(vm.checkboxGroup.indexOf('a') !== -1).toBe(true);
      done();
    });
  });
});
