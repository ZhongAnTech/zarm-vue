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

describe('StackPicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
      <za-stack-picker
        :visible.sync='visible'
        v-model='value'
        title="级联选择"
        placeholder="请选择"
        :dataSource='data'/>
      `,
      data() {
        return {
          value: [],
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
      <za-stack-picker
        :visible.sync='visible'
        v-model='value'
        title="级联选择"
        placeholder="请选择"
        :dataSource='data'
        @change='handleChange'/>
      `,
      data() {
        return {
          value: [],
          visible: false,
          data,
        };
      },
      methods: {
        handleChange(v) {
          value = v;
        },
      },
    }, true);
    vm.$el.querySelectorAll('.za-stack-picker-stack-column')[0].querySelector('.za-stack-picker-stack-item').click();
    vm.$nextTick(() => {
      vm.$el.querySelectorAll('.za-stack-picker-stack-column')[1].querySelector('.za-stack-picker-stack-item').click();
      vm.$nextTick(() => {
        expect(value[0].label).to.equal('北京市');
        done();
      });
    });
  });
});
