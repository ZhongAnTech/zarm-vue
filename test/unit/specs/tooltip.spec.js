import Tooltip from '@/tooltip';
import { createTest, createVue, destroyVM } from '../util';

describe('Tooltip', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Tooltip, {
      prefixCls: 'za-tooltip',
      visible: true,
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(el.querySelector('.za-tooltip')).to.exsit;
    });
  });

  it('visible', done => {
    vm = createVue({
      template: `
        <za-tooltip ref='tooltip' :visible='visible'></za-tooltip>
      `,
      data() {
        return {
          visible: false,
        };
      },
    }, true);
    vm.$nextTick(() => {
      vm.$refs.tooltip.currentVisible = true;
      vm.$nextTick(() => {
        expect(vm.$refs.tooltip.styleCls).to.exsit;
        done();
      });
    });
  });

  it('message', done => {
    vm = createVue({
      template: `
        <za-tooltip message='test' :visible='visible'></za-tooltip>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    vm.$nextTick(() => {
      const messageEl = vm.$el.querySelector('.za-tooltip-inner');
      expect(messageEl.innerText).to.equal('test');
      done();
    });
  });
});
