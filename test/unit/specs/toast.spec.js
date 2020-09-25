import zaToast from '@/toast';
import { mount } from '../util';

const $zaToast = zaToast.root;

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

    expect(wrapper.find('.za-toast--open')).toBeTruthy();
    setTimeout(() => {
      expect(wrapper.find('.za-toast--open')).toBeTruthy();
      vm.visible = true;
      setTimeout(() => {
        expect(wrapper.find('.za-toast--open')).toBeTruthy();
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
});
