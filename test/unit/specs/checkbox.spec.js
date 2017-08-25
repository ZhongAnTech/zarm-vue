import Checkbox from '@/checkbox';
import { createTest, createVue, destroyVM } from '../util';

describe('Checkbox', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Checkbox, {
      prefixCls: 'za-checkbox',
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-checkbox')).to.be.true;
  });

  it('theme', () => {
    vm = createTest(Checkbox, {
      theme: 'primary',
      type: 'button',
    });
    const el = vm.$el;
    expect(el.classList.contains('theme-primary'));
  });

  it('type', () => {
    vm = createTest(Checkbox, {
      type: 'cell',
    });
    const el = vm.$el;
    expect(el.classList.contains('za-cell'));
  });

  it('disabled', () => {
    vm = createTest(Checkbox, {
      disabled: true,
    });
    const el = vm.$el;
    expect(el.classList.contains('disabled'));
  });

  it('group create', () => {
    vm = createVue({
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
    });
    const el = vm.$el;
    expect(el.classList.contains('za-checkbox-group'));
  });

  it('group shape type theme block', () => {
    vm = createVue({
      template: `
        <za-checkbox-group v-model='checkboxGroup' shape='radius' type='button' theme='primary' block>
          <za-checkbox v-for='(city, index) in cities' :label="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
        </za-checkbox-group>
      `,
      data() {
        return {
          cities: ['上海', '北京', '广州', '深圳'],
          checkboxGroup: [],
        };
      },
    });
    const el = vm.$el;
    expect(el.classList.contains('shape-radius')).to.be.true;
    expect(el.classList.contains('block')).to.be.true;
    expect(el.querySelector('.za-button').classList.contains('theme-primary')).to.be.true;
    expect(el.querySelector('.za-button')).to.exist;
  });

  // it('group click', done => {
  //   vm = createVue({
  //     template: `
  //       <za-checkbox-group v-model='checkboxGroup'>
  //         <za-checkbox label="a" key="a" ref='a'>a</za-checkbox>
  //         <za-checkbox label="b" key="b" ref='b'>b</za-checkbox>
  //         <za-checkbox label="c" key="c" ref='c'>c</za-checkbox>
  //       </za-checkbox-group>
  //     `,
  //     data() {
  //       return {
  //         checkboxGroup: [],
  //       };
  //     },
  //   });
  //   vm.$refs.a.$el.click();
  //   setTimeout(() => {
  //     console.log(vm.checkboxGroup); // eslint-disable-line no-console
  //     expect(vm.checkboxGroup.indexOf('a') !== -1).to.be.true;
  //     done();
  //   }, 50);
  // });

  it('group default check', () => {
    vm = createVue({
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
    });
    const el = vm.$el;
    const firstCheckbox = el.querySelectorAll('.za-checkbox-input')[0];
    expect(firstCheckbox.checked).to.be.true;
  });

  it('change', done => {
    let result;
    vm = createVue({
      template: `
        <za-checkbox v-model='v1' @change='handleChange'>单独使用</za-checkbox>
      `,
      data() {
        return {
          v1: false,
        };
      },
      methods: {
        handleChange(evt) {
          result = evt;
        },
      },
    }, true);
    const el = vm.$el;
    const input = vm.$el.querySelector('.za-checkbox-input');
    input.click();

    setTimeout(_ => { // eslint-disable-line no-unused-vars
      expect(el.classList.contains('checked')).to.be.true;
      expect(input.checked).to.be.true;
      expect(vm.v1).to.be.true;
      expect(result).to.exist;
      done();
    }, 50);
  });
});
