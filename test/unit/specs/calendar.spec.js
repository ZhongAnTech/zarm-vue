import zaCalendar from '@/calendar';
import { mount } from '../util';

describe('Calendar', () => {
  it('create', () => {
    const wrapper = mount(zaCalendar);
    const { vm } = wrapper;
    expect(vm.$el.classList.contains('za-calendar')).toBe(true);
  });

  it('set selectedValue', done => {
    const TestCompo = {
      components: {
        zaCalendar,
      },
      template: `
        <za-calendar 
          ref='calendar'
          :visible.sync='visible' 
          @changed='changeDate' 
          @ok='handleOk1' 
          :selectedValue='value1' 
        />
      `,
      data() {
        return {
          visible: false,
          value1: [],
        };
      },
      methods: {
        changeDate(date) {
          this.value1 = date;
        },
        handleOk1(date) {
          this.value1 = date;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.visible = true;
    vm.$refs.calendar.setChanged('2018-02-23');
    vm.$nextTick(() => {
      expect(vm.value1[0]).toEqual('2018-02-23');
      done();
    });
  });

  it('set selectedRangeValue', done => {
    const TestCompo = {
      components: {
        zaCalendar,
      },
      template: `
        <za-calendar 
         ref='calendar'
         :multiSelected='isMultiSelected'
         :visible.sync='visible' 
         @changed='changeDate' 
         @ok='handleOk1' 
         :selectedValue='value1' 
        />
      `,
      data() {
        return {
          visible: false,
          isMultiSelected: true,
          value1: [],
        };
      },
      methods: {
        changeDate(date) {
          this.value1 = date;
        },
        handleOk1(date) {
          this.value1 = date;
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.visible = true;
    vm.$refs.calendar.setChanged('2018-02-23');
    vm.$refs.calendar.setChanged('2018-03-20');
    vm.$nextTick(() => {
      expect(vm.value1[0]).toEqual('2018-02-23');
      expect(vm.value1[1]).toEqual('2018-03-20');
      done();
    });
  });
});
