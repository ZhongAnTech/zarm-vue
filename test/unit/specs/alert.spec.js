import zaAlert from '@/alert';
import { mount, shallowMount } from '../util';

const $zaAlert = zaAlert.root;

describe('Alert', () => {
  it('create', done => {
    let result;
    const TestCompo = {
      components: {
        zaAlert,
      },
      template: `
        <za-alert :visible.sync='visible' radius title="警告" message="这里是警告信息" @close='handleClose'></za-alert>
      `,
      methods: {
        handleClose() {
          result = 1;
        },
      },
      data() {
        return {
          visible: true,
        };
      },
    };
    const wrapper = mount(TestCompo, {
      propsData: {
        prefixCls: 'za-alert',
      },
    });
    const { vm } = wrapper;
    wrapper.find('.za-button').trigger('click');
    vm.$nextTick(() => {
      expect(vm.visible).toBe(false);
      expect(result).toEqual(1);
      done();
    });
  });

  it('use $zaAlert', done => {
    const TestCompo = {
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          $zaAlert('test');
        },
      },
    };
    const wrapper = shallowMount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-modal')).toBeTruthy();
      done();
    }, 20);
  });

  it('use $zaAlert with Vnode', done => {
    const TestCompo = {
      template: `
        <div @click='handleClick'>alert</div>
      `,
      methods: {
        handleClick() {
          const h = this.$createElement;
          const message = '<p>123</p>';
          $zaAlert(message);
        },
      },
    };
    const wrapper = shallowMount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    setTimeout(() => {
      expect(document.querySelector('.za-modal')).toBeTruthy();
      done();
    }, 20);
  });
});
