import { createVue, destroyVM } from '../util';

describe('Input', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-input readonly v-model='v1' type="text" placeholder="type is text" :maxLength='10'></za-input>
      `,
      data() {
        return {
          v1: 'test',
        };
      },
    }, true);
    const inputElm = vm.$el.querySelector('input');
    expect(inputElm.getAttribute('placeholder')).to.equal('type is text');
    expect(inputElm.value).to.equal('test');
    expect(inputElm.getAttribute('readonly')).to.equal('readonly');
    expect(inputElm.getAttribute('maxlength')).to.equal('10');
  });

  it('disabled', () => {
    vm = createVue({
      template: `
        <za-input disabled></za-input>
      `,
      data() {
        return {
          v1: 'test',
        };
      },
    }, true);
    const inputElm = vm.$el.querySelector('input');
    expect(inputElm.getAttribute('disabled')).to.ok;
  });

  it('type', () => {
    vm = createVue({
      template: `
        <za-input type="textarea">
        </za-input>
      `,
    }, true);
    expect(vm.$el.querySelector('textarea')).to.exist;
  });

  it('showLength', () => {
    vm = createVue({
      template: `
        <za-input autosize showLength type="textarea" rows="4" maxLength="200" placeholder="摘要" value='123456'>
        </za-input>
      `,
    }, true);
    expect(vm.$el.querySelector('.za-input-length').innerText).to.equal('6/200');
  });

  it('rows', () => {
    vm = createVue({
      template: `
        <za-input type="textarea" :rows="3">
        </za-input>
      `,
    }, true);
    expect(vm.$el.querySelector('textarea').getAttribute('rows')).to.be.equal('3');
  });

  it('defalut value', () => {
    vm = createVue({
      template: `
        <za-input v-model='v'>
        </za-input>
      `,
      data() {
        return {
          v: 'test',
        };
      },
    }, true);
    expect(vm.$el.querySelector('input').value).to.be.equal('test');
  });

  it('autosize', done => {
    vm = createVue({
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
    }, true);
    const textarea = vm.$el.querySelector('textarea');
    const initHeight = parseInt(textarea.style.height, 10);
    vm.textareaValue = 'sda\ndasd\nddasdsda\ndasd';
    setTimeout(() => {
      expect(parseInt(textarea.style.height, 10)).to.be.equal(initHeight * 2);
      done();
    }, 100);
  });

  it('trigger focus', done => {
    let resultFocus;
    vm = createVue({
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
    }, true);
    vm.$refs.input.focus();

    vm.$nextTick(() => {
      expect(resultFocus).to.exist;
      done();
    });
  });

  it('event:focus & blur', done => {
    vm = createVue({
      template: `
        <za-input
          ref="input"
          placeholder="请输入内容"
          value="input">
        </za-input>
      `,
    }, true);

    const spyFocus = sinon.spy();
    const spyBlur = sinon.spy();

    vm.$refs.input.$on('focus', spyFocus);
    vm.$refs.input.$on('blur', spyBlur);
    vm.$el.querySelector('input').focus();
    vm.$el.querySelector('input').blur();

    vm.$nextTick(() => {
      expect(spyFocus.calledOnce).to.be.true;
      expect(spyBlur.calledOnce).to.be.true;
      done();
    });
  });
  it('event:change', done => {
    vm = createVue({
      template: `
        <za-input
          ref="input"
          placeholder="请输入内容"
          :value="input">
        </za-input>
      `,
      data() {
        return {
          input: 'a',
        };
      },
    }, true);

    const spy = sinon.spy();
    vm.$refs.input.$on('change', spy);
    vm.input = 'b';

    vm.$nextTick(() => {
      expect(spy.withArgs('b').calledOnce).to.be.false;
      done();
    });
  });
});
