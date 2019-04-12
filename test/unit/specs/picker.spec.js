import ZaPicker from '@/picker';
import ZaSelect from '@/select';
import { mount } from '../util';

describe('Picker', () => {
  it('create', () => {
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        :visible.sync='visible'
        :dataSource='data1'/>
      `,
      data() {
        return {
          visible: true,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    });
    expect(wrapper.find('.za-picker')).toBeTruthy();
  });

  it('defaultValue', () => {
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        :visible.sync='visible'
        :defaultValue='value'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: '1',
          visible: false,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    });
    wrapper.element.click();
    expect(wrapper.find({ name: 'zaPicker' }).vm.currentValue[0]).toBe('1');
  });

  it('single column', () => {
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        :visible.sync='visible'
        :defaultValue='value'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: '1',
          visible: false,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    });
    wrapper.element.click();
    expect(wrapper.find({ name: 'zaPicker' }).vm.currentValue[0]).toBe('1');
  });

  it('multi columns', () => {
    let value = [];
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        :visible.sync='visible'
        :defaultValue='value'
        @ok='handleOk'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: ['1', '3'],
          visible: true,
          data1: [
            [
              { value: '1', label: '选项一' },
              { value: '2', label: '选项二' },
            ],
            [
              { value: '3', label: '选项A' },
              { value: '4', label: '选项B' },
            ],
          ],
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    });
    wrapper.find('.za-picker__submit').trigger('click');
    expect(value[1].value).toBe('3');
  });

  it('cascader picker', () => {
    let value = [];
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        :visible.sync='visible'
        :defaultValue='value'
        @ok='handleOk'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: ['1', '12'],
          visible: true,
          data1: [
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
                { value: '21', label: '杨浦区' },
                { value: '22', label: '静安区' },
              ],
            },
          ],
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    });
    wrapper.find('.za-picker__submit').trigger('click');
    expect(value[1].value).toBe('12');
  });

  it('update dataSource', () => {
    const data2 = [
      { value: '1', label: '选项一' },
      { value: '2', label: '选项二' },
      { value: '3', label: '选项三' },
    ];
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        v-model='value'
        :visible.sync='visible'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: '',
          visible: true,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    }, { sync: false });
    wrapper.setData({ data1: data2 });
    wrapper.vm.$nextTick(() => {
      const items = wrapper.findAll('.za-wheel__item').length;
      expect(items).toBe(3);
    });
  });

  it('toggle cancel', () => {
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        :visible.sync='visible'
        v-model='value'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: '',
          visible: true,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    });
    wrapper.find('.za-picker__cancel').trigger('click');
    expect(wrapper.vm.visible).toBe(false);
  });

  it('v-model on ok', () => {
    let value;
    const wrapper = mount({
      components: { ZaSelect },
      template: `
      <za-select
        :visible.sync='visible'
        v-model='value'
        :dataSource='data1'
        @ok='handleOk'/>
      `,
      data() {
        return {
          value: '',
          visible: true,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    });
    wrapper.find('.za-picker__submit').trigger('click');
    expect(value.value).toBe('1');
    expect(value.label).toBe('选项一');
    expect(wrapper.vm.value[0]).toBe('1');
  });

  it('change value', (done) => {
    const wrapper = mount({
      components: { ZaPicker },
      template: `
      <za-picker
        :visible.sync='visible'
        :v-model='value'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: '',
          visible: true,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    });
    const { vm } = wrapper;
    wrapper.setData({ value: '2' });
    vm.$nextTick(() => {
      const selectedDOM = wrapper.find('.za-wheel__item--selected');
      // expect(selectedDOM).toMatchSnapshot();
      expect(selectedDOM).toBeTruthy();
      done();
    });
  });
});
