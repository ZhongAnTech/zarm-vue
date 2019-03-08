import zaToast from '@/toast';
import zaLoading from '@/loading';
import { mount } from '../util';

const $zaToast = zaToast.root;
const $zaLoading = zaLoading.root;

describe('Toast', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaToast,
      },
      template: `
        <za-toast :visible.sync='visible'>默认3秒自动关闭</za-toast>
      `,
      data() {
        return {
          visible: true,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    expect(vm.$el.classList.contains('za-toast')).toBe(true);
    expect(vm.$el.classList.contains('za-toast--open')).toBe(true);
  });

  it('open and close', done => {
    const TestCompo = {
      components: {
        zaToast,
      },
      template: `
        <za-toast :visible.sync='visible' :duration='30'>默认3秒自动关闭</za-toast>
      `,
      data() {
        return {
          visible: true,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    expect(vm.$el.classList.contains('za-toast--open')).toBe(true);
    setTimeout(() => {
      expect(vm.$el.classList.contains('za-toast--open')).toBe(false);
      vm.visible = true;
      setTimeout(() => {
        expect(vm.$el.classList.contains('za-toast--open')).toBe(false);
        done();
      }, 30);
    }, 60);
  });

  it('$zaToast', done => {
    const TestCompo = {
      template: `
        <div @click='handleClick'>test</div>
      `,
      methods: {
        handleClick() {
          $zaToast('test');
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.click();
    vm.$nextTick(() => {
      expect(document.querySelector('.za-toast')).not.toBeUndefined();
      done();
    });
  });

  it('$zaToast with options', done => {
    const TestCompo = {
      template: `
        <div @click='handleClick'>test</div>
      `,
      methods: {
        handleClick() {
          $zaToast({
            message: 'test',
          });
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.click();
    vm.$nextTick(() => {
      expect(document.querySelector('.za-toast .za-toast__container').innerHTML).toEqual('test');
      done();
    });
  });

  it('$zaLoading', done => {
    const TestCompo = {
      template: `
        <div @click='handleClick'>test</div>
      `,
      methods: {
        handleClick() {
          const loading = $zaLoading();
          setTimeout(() => {
            loading.close();
          }, 50);
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-loading--open')).not.toBeUndefined();
      setTimeout(() => {
        expect(document.querySelector('.za-loading--open')).toBeNull();
        done();
      }, 100);
    }, 20);
  });

  it('v-za-loading', done => {
    const TestCompo = {
      template: `
        <div v-za-loading='isLoading' @click='handleClick'>test</div>
      `,
      data() {
        return {
          isLoading: false,
        };
      },
      methods: {
        handleClick() {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
          }, 50);
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-loading--open')).not.toBeUndefined();
      setTimeout(() => {
        expect(document.querySelector('.za-loading--open')).toBeNull();
        done();
      }, 100);
    }, 20);
  });
});
