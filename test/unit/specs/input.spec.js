import zaInput from '@/input';
import { mount } from '../util';

describe('Input', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input readonly v-model='v1' type="text" placeholder="type is text" :maxLength='10'></za-input>
      `,
      data() {
        return {
          v1: 'test',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const inputElm = vm.$el.querySelector('input');
    expect(inputElm.getAttribute('placeholder')).toEqual('type is text');
    expect(inputElm.value).toEqual('test');
    expect(inputElm.getAttribute('readonly')).toEqual('readonly');
    expect(inputElm.getAttribute('maxlength')).toEqual('10');
  });

  it('disabled', () => {
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input disabled></za-input>
      `,
      data() {
        return {
          v1: 'test',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const inputElm = vm.$el.querySelector('input');
    expect(inputElm.getAttribute('disabled')).toEqual('disabled');
  });

  it('type', () => {
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input type="textarea">
        </za-input>
      `,
    };
    const wrapper = mount(TestCompo);
    expect(wrapper.find('textarea')).toBeTruthy();
  });

  it('showLength', done => {
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input autosize showLength type="textarea" rows="4" maxLength="200" placeholder="摘要" value='123456'>
        </za-input>
      `,
    };
    const wrapper = mount(TestCompo);
    setTimeout(() => {
      expect(wrapper.find('.za-input__length').text()).toEqual('6/200');
      done();
    }, 20);
  });

  it('rows', () => {
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input type="textarea" :rows="3">
        </za-input>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(vm.$el.querySelector('textarea').getAttribute('rows')).toEqual('3');
  });

  it('defalut value', () => {
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input v-model='v'>
        </za-input>
      `,
      data() {
        return {
          v: 'test',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(vm.$el.querySelector('input').value).toEqual('test');
  });

  it('autosize', done => {
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input
          ref='textarea'
          autosize
          type="textarea"
          :row='2'
          v-model="textareaValue"
        >
        </za-input>
      `,
      data() {
        return {
          textareaValue: '',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const textarea = vm.$el.querySelector('textarea');
    const initHeight = parseInt(textarea.style.height, 10);
    vm.textareaValue = 'sda\ndasd\nddasdsda\ndasd';
    setTimeout(() => {
      expect(parseInt(textarea.style.height, 10)).toEqual(initHeight * 2);
      done();
    }, 100);
  });

  it('trigger focus', done => {
    let resultFocus;
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input
          ref="input"
          placeholder="请输入内容"
          value="input"
          @focus='handleFocus'>
        </za-input>
      `,
      methods: {
        handleFocus(evt) {
          resultFocus = evt;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$refs.input.focus();

    vm.$nextTick(() => {
      expect(resultFocus).not.toBeUndefined();
      done();
    });
  });

  it('event:focus & blur', done => {
    let resultFocus;
    let resultBlur;
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
       <za-input
          ref="input"
          placeholder="请输入内容"
          @focus='handleFocus'
          @blur='handleBlur'
          value="input">
        </za-input>
      `,
      methods: {
        handleFocus(evt) {
          resultFocus = evt;
        },
        handleBlur(evt) {
          resultBlur = evt;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    wrapper.find('input').trigger('focus');
    wrapper.find('input').trigger('blur');

    vm.$nextTick(() => {
      expect(resultFocus).not.toBeUndefined();
      expect(resultBlur).not.toBeUndefined();
      done();
    });
  });

  it('event:change', done => {
    let result;
    const TestCompo = {
      components: {
        zaInput,
      },
      template: `
        <za-input
          ref="input"
          placeholder="请输入内容"
          @change="handleInput"
          :value="input">
        </za-input>
      `,
      data() {
        return {
          input: 'a',
        };
      },
      methods: {
        handleInput(evt) {
          result = evt;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.find('input').setValue('blur');
    vm.$nextTick(() => {
      expect(result).not.toBeUndefined();
      done();
    });
  });
});
