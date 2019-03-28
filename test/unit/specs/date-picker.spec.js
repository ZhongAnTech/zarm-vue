import zaDatePicker from '@/date-picker';
import zaDateSelect from '@/date-select';
import { mount } from '../util';

describe('DatePicker', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaDatePicker,
      },
      template: `
      <za-date-picker
        :visible.sync='visible'
        title="选择年份"
        format="yyyy年MM月dd日"
        value-format="yyyy-MM-dd HH:mm"
        placeholder="请选择年份"
        mode='year'/>
      `,
      data() {
        return {
          value: '',
          visible: false,
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.element.click();
    vm.$nextTick(() => {
      expect(wrapper.find('.za-datepicker')).toBeTruthy();
    });
  });

  it('ok year', done => {
    let value = '';
    const TestCompo = {
      components: {
        zaDatePicker,
      },
      template: `
      <za-date-picker
        :visible.sync='visible'
        :defaultValue='value'
        title="选择年份"
        placeholder="请选择年份"
        @ok="handleOk"
        mode='year'/>
      `,
      data() {
        return {
          value: '2018',
          visible: true,
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      wrapper.find('.za-datepicker__submit').trigger('click');
      expect(value.getFullYear()).toEqual(2018);
      done();
    });
  });

  it('ok date', done => {
    let value = '';
    const TestCompo = {
      components: {
        zaDatePicker,
      },
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
          visible: true,
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      wrapper.find('.za-datepicker__submit').trigger('click');
      setTimeout(() => {
        expect(value.getFullYear()).toEqual(2018);
        expect(value.getMonth()).toEqual(4);
        done();
      }, 20);
    });
  });

  it('ok month', done => {
    let value = '';
    const TestCompo = {
      components: {
        zaDatePicker,
      },
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
          visible: true,
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      wrapper.find('.za-datepicker__submit').trigger('click');
      setTimeout(() => {
        expect(value.getMonth()).toEqual(4);
        done();
      }, 20);
    });
  });

  it('ok time', done => {
    let value = '';
    const TestCompo = {
      components: {
        zaDatePicker,
      },
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
          visible: true,
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      wrapper.find('.za-datepicker__submit').trigger('click');
      setTimeout(() => {
        expect(value.getHours()).toEqual(9);
        expect(value.getMinutes()).toEqual(45);
        done();
      }, 20);
    });
  });

  it('ok datetime', done => {
    let value = '';
    const TestCompo = {
      components: {
        zaDatePicker,
      },
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
          visible: true,
        };
      },
      methods: {
        handleOk(v) {
          value = v;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      wrapper.find('.za-datepicker__submit').trigger('click');
      setTimeout(() => {
        expect(value.getHours()).toEqual(9);
        expect(value.getMinutes()).toEqual(20);
        done();
      }, 20);
    });
  });

  it('date-select on ok', done => {
    const TestCompo = {
      components: {
        zaDateSelect,
      },
      template: `
      <za-date-select
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
          this.value = v;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    wrapper.element.click();
    vm.$nextTick(() => {
        // wrapper.find('.za-datepicker__submit').trigger('click');
        // expect(vm.value.getFullYear()).toEqual(2000);
        done();
    });
  });
});
