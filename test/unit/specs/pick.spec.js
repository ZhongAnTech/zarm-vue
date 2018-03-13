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
        :visible.sync='visible'
        v-model='value'
        :defaultValue='["1"]'
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
      vm.value = ['1'];
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

  it('on ok', done => {
    let value;
    vm = createVue({
      template: `
      <za-picker
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
