import zaTooltip from '@/tooltip';
import { mount } from '../util';

const $zaTooltip = zaTooltip.root;

describe('Tooltip', () => {
  it('create', done => {
    const wrapper = mount(zaTooltip, {
      propsData: {
        prefixCls: 'za-tooltip',
        visible: true,
      },
    });

    const { vm } = wrapper;
    const el = vm.$el;
    vm.$nextTick(() => {
      // eslint-disable-line no-unused-vars
      expect(el.querySelector('.za-tooltip')).not.toBeUndefined();
      done();
    });
  });


  it('visible', done => {
    const TestCompo = {
      components: {
        zaTooltip,
      },
      template: `
        <za-tooltip ref='tooltip' :visible='visible'></za-tooltip>
      `,
      data() {
        return {
          visible: true,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$refs.tooltip.currentVisible).toBe(true);
      done();
    });
  });

  it('message', done => {
    const TestCompo = {
      components: {
        zaTooltip,
      },
      template: `
        <za-tooltip message='test' :visible='visible'></za-tooltip>
      `,
      data() {
        return {
          visible: true,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$nextTick(() => {
      const messageEl = vm.$el.querySelector('.za-tooltip__inner');
      expect(messageEl.innerHTML).toEqual('test');
      done();
    });
  });

  it('$zaTooltip', done => {
    let evl;

    const TestCompo = {
      components: {
        zaTooltip,
      },
      template: `
        <div @click="showTooltip">showToolTip</div>
      `,
      data() {
        return {
          message: 'test',
        };
      },
      methods: {
        showTooltip() {
          evl = $zaTooltip({ message: this.message });
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;

    vm.$el.click();
    vm.$nextTick(() => {
      expect(evl.message).toEqual('test');
      done();
    });
  });
});
