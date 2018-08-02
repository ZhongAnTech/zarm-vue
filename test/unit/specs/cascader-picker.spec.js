import { createVue, destroyVM } from '../util';

const data = [
  {
    value: '1',
    label: '北京市',
    children: [
      { value: '11', label: '海淀区' },
      { value: '12', label: '西城区' },
    ],
  },
  {
    value: '2',
    label: '上海市',
    children: [
      { value: '21', label: '黄埔区' },
      { value: '22', label: '虹口区' },
    ],
  },
];

describe('CascadePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
      <za-picker
        :visible.sync='visible'
        v-model='value'
        :dataSource='data'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
          data,
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(true);
      done();
    });
  });

  it('on ok', done => {
    let value;
    vm = createVue({
      template: `
      <za-picker
        :visible.sync='visible'
        v-model='value'
        :dataSource='data'
        @ok='handleOk'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
          data,
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    }, true);
    vm.$nextTick(() => {
      document.querySelector('.za-picker-submit').click();
      expect(value[0].label).to.equal('北京市');
      done();
    });
  });
});
