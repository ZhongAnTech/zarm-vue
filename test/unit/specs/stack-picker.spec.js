import zaStackPicker from '@/stack-picker';
import { mount } from '../util';

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

  it('create', done => {
    const TestCompo = {
      components: {
        zaStackPicker
      },
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
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).toEqual(true);
      done();
    });
  });

  it('stackpicker change', done => {
    let value;
    const TestCompo = {
      components: {
        zaStackPicker
      },
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
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.querySelectorAll('.za-stack-picker-stack-column')[0].querySelector('.za-stack-picker-stack-item').click();
    vm.$nextTick(() => {
      expect(value[0]).toEqual('1');
      done();
    });
  });

  it('stackpicker ok', done => {
    let value;
    const TestCompo = {
      components: {
        zaStackPicker
      },
      template: `
        <za-stack-picker
        :visible.sync='visible'
        v-model='value'
        title="级联选择"
        placeholder="请选择"
        :dataSource='data'
        @ok='handleOk'/>
      `,
      data() {
        return {
          value: ['1', '12'],
          visible: false,
          data,
        };
      },
      methods: {
        handleChange(v) {
          value = v;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$el.click();
    vm.$nextTick(() => {
      wrapper.find('.za-stack-picker-submit').trigger('click');
      expect(value[0].value).toEqual('1');
      done();
    });
  });
});
