import { createVue, destroyVM } from '../util';

describe('DatePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create datepicker', done => {
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
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

  it('datepicker ok year', done => {
    let value = '';
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
        :defaultValue='value'
        placeholder="请选择年份"
        @ok="handleOk"
        mode='year'/>
      `,
      data() {
        return {
          value: '2018',
          visible: false,
        };
      },
      methods: {
        handleOk(v) {
          // console.log(v);
          value = v;
        },
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-picker-submit').click();
      expect(value.getFullYear()).to.equal(2018);
      done();
    });
  });

  it('datepicker ok date', done => {
    let value = '';
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        :defaultValue='value'
        title="选择日期"
        placeholder="请选择日期"
        @ok="handleOk"
        mode='date'/>
      `,
      data() {
        return {
          value: '2018-05-20',
          visible: false,
        };
      },
      methods: {
        handleOk(v) {
          // console.log(v);
          value = v;
        },
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-picker-submit').click();
      expect(value.getFullYear()).to.equal(2018);
      expect(value.getMonth()).to.equal(4);
      done();
    });
  });

  it('datepicker ok month', done => {
    let value = '';
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        :defaultValue='value'
        title="选择月份"
        placeholder="请选择月份"
        @ok="handleOk"
        mode='month'/>
      `,
      data() {
        return {
          value: '2018-05-20',
          visible: false,
        };
      },
      methods: {
        handleOk(v) {
          // console.log(v);
          value = v;
        },
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-picker-submit').click();
      expect(value.getMonth()).to.equal(4);
      done();
    });
  });

  it('datepicker ok time', done => {
    let value = '';
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择时间"
        :defaultValue='value'
        placeholder="请选择时间"
        @ok="handleOk"
        mode='time'/>
      `,
      data() {
        return {
          value: '2018-09-10 09:45',
          visible: false,
        };
      },
      methods: {
        handleOk(v) {
          // console.log(v);
          value = v;
        },
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-picker-submit').click();
      expect(value.getHours()).to.equal(9);
      expect(value.getMinutes()).to.equal(45);
      done();
    });
  });

  it('datepicker ok datetime', done => {
    let value = '';
    vm = createVue({
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择时间"
        :defaultValue='value'
        placeholder="请选择时间"
        @ok="handleOk"
        mode='datetime'/>
      `,
      data() {
        return {
          value: '2018-05-20 09:20:00',
          visible: false,
        };
      },
      methods: {
        handleOk(v) {
          // console.log(v);
          value = v;
        },
      },
    }, true);
    vm.$el.click();
    vm.$nextTick(() => {
      vm.$el.querySelector('.za-picker-submit').click();
      expect(value.getHours()).to.equal(9);
      expect(value.getMinutes()).to.equal(20);
      done();
    });
  });

  it('v-model on ok', done => {
    let value;
    vm = createVue({
      template: `
      <za-date-select
        :visible.sync='visible'
        v-model='value'
        mode='date'
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
