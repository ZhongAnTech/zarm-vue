import { createVue, destroyVM } from '../util';

describe('DatePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create year', done => {
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
        v-model='value'
        placeholder="请选择年份"
        mode='year'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(true);
      done();
    });
  });

  it('create date', done => {
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
        v-model='value'
        placeholder="请选择年份"
        mode='date'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(true);
      done();
    });
  });

  it('create month', done => {
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
        v-model='value'
        placeholder="请选择年份"
        mode='month'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(true);
      done();
    });
  });

  it('create time', done => {
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
        v-model='value'
        placeholder="请选择年份"
        mode='time'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
        };
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.visible).to.equal(true);
      done();
    });
  });

  it('create datetime', done => {
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
        v-model='value'
        placeholder="请选择年份"
        mode='datetime'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
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
      <za-date-picker
        :visible.sync='visible'
        v-model='value'
        mode='datetime'
        @ok='handleOk'/>
      `,
      data() {
        return {
          value: '2000-01-01',
          visible: false,
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
      expect(value.getFullYear()).to.equal(2000);
      done();
    });
  });
});
