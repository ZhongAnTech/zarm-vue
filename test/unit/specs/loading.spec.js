import Vue from 'vue';
import ZaLoading from '@/loading';
import { mount } from '../util';

Vue.use(ZaLoading.directive);
const $zaLoading = ZaLoading.root;

describe('Loading', () => {
  it('create', () => {
    const wrapper = mount({
      components: { ZaLoading },
      template: `
        <za-loading ref='loading' :visible.sync='visible'></za-loading>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    expect(wrapper.find('.za-loading').exists()).toBe(true);
  });

  it('hide', () => {
    const wrapper = mount({
      components: { ZaLoading },
      template: `
        <za-loading :visible.sync='visible'></za-loading>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    wrapper.setData({ visible: false });
    // console.log(wrapper.html())
    expect(wrapper.classes('.za-loading--open')).toBe(false);
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
