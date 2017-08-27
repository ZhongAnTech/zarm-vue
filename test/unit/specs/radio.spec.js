import { createVue, destroyVM } from '../util';

describe('Radio', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-radio-group theme='primary' type='button' shape='radius' v-model='radio' ref='radio'>
          <za-radio ref='a' label='a'>a</za-radio>
          <za-radio ref='b' label='b'>a</za-radio>
          <za-radio ref='c' label='c'>a</za-radio>
        </za-radio-group>
      `,
      data() {
        return {
          radio: '',
        };
      },
    }, true);
    const el = vm.$el;
    expect(vm.$refs.a.isGroup).to.be.true;
    expect(el.classList.contains('shape-radius')).to.be.true;
    expect(vm.$refs.a.$el.classList.contains('theme-primary')).to.be.true;
    expect(vm.$refs.a.$el.classList.contains('za-radio')).to.be.true;
    expect(vm.$refs.a.$el.classList.contains('za-button')).to.be.true;
  });

  it('disabled', () => {
    vm = createVue({
      template: `
        <za-radio-group theme='primary' type='button' disabled>
          <za-radio ref='a' label='a'>a</za-radio>
          <za-radio ref='b' label='b'>b</za-radio>
          <za-radio ref='c' label='c'>c</za-radio>
        </za-radio-group>
      `,
    }, true);
    expect(vm.$refs.a.$el.classList.contains('disabled')).to.be.true;
  });

  it('default value', () => {
    vm = createVue({
      template: `
        <za-radio-group theme='primary' type='button' v-model='radio'>
          <za-radio ref='a' label='a'>a</za-radio>
          <za-radio ref='b' label='b'>b</za-radio>
          <za-radio ref='c' label='c'>c</za-radio>
        </za-radio-group>
      `,
      data() {
        return {
          radio: 'a',
        };
      },
    }, true);
    expect(vm.$refs.a.$el.classList.contains('checked')).to.be.true;
  });

  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <za-radio-group theme='primary' type='button' v-model='radio' @change='handleChange'>
          <za-radio ref='a' label='a'>a</za-radio>
          <za-radio ref='b' label='b'>b</za-radio>
          <za-radio ref='c' label='c'>c</za-radio>
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
    }, true);
    vm.$refs.a.$el.querySelector('input').click();
    vm.$nextTick(() => {
      expect(vm.radio).to.equal('a');
      expect(result).to.equal('a');
      done();
    });
  });
});
