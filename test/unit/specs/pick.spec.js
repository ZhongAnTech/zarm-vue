import { createVue, destroyVM } from '../util';

describe('Picker', () => {
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
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(true);
      done();
    });
  });

  it('defaultValue', done => {
    vm = createVue({
      template: `
      <za-picker
        ref="picker"
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
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.$refs.picker.currentValue).to.equal('1');
      done();
    });
  });

  it('single column', done => {
    vm = createVue({
      template: `
      <za-picker
        ref="picker"
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
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.$refs.picker.currentValue).to.equal('1');
      done();
    });
  });

  it('multi columns', done => {
    let value = [];
    vm = createVue({
      template: `
      <za-picker
        ref="picker"
        :visible.sync='visible'
        :defaultValue='value'
        @ok='handleOk'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: ['1', '3'],
          visible: false,
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
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-picker-submit').click();
      expect(value[1].value).to.equal('3');
      done();
    });
  });

  it('cascader picker', done => {
    let value = [];
    vm = createVue({
      template: `
      <za-picker
        ref="picker"
        :visible.sync='visible'
        :defaultValue='value'
        @ok='handleOk'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: ['1', '12'],
          visible: false,
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
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-picker-submit').click();
      expect(value[1].value).to.equal('12');
      done();
    });
  });

  it('toggle cancel', done => {
    vm = createVue({
      template: `
      <za-picker
        :visible.sync='visible'
        v-model='value'
        :dataSource='data1'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(true);
      vm.$el.querySelector('.za-picker-cancel').click();
      vm.$nextTick(() => {
        expect(vm.visible).to.equal(false);
        done();
      });
    });
  });

  it('v-model on ok', done => {
    let value;
    vm = createVue({
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
          visible: false,
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
    }, true);
    vm.$el.querySelector('.za-picker-submit').click();
    vm.$nextTick(() => {
      expect(value.value).to.equal('1');
      expect(value.label).to.equal('选项一');
      expect(vm.value[0]).to.equal('1');
      done();
    });
  });
});
