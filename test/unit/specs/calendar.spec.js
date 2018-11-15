import zaCalendar from '@/calendar';
import { mount } from '../util';

describe('Calendar', () => {
  it('create', done => {
    const wrapper = mount(zaCalendar);
    const { vm } = wrapper;
    expect(vm.$el.classList.contains('za-calendar')).toBe(true);
  });

  it('set sigleValue', done => {
    const TestCompo = {
      components: {
        zaCalendar,
      },
      template: `
        <za-calendar 
          ref='calendar'
          v-model="value" 
        />
      `,
      data() {
        return {
          value: '',
        };
      },
      methods: {
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const calendar = vm.$refs.calendar;
    const selectedDate = calendar.monthList[0].dates[10];
    calendar._dateClick(selectedDate);
    vm.$nextTick(() => {
      expect(vm.value).toBe(selectedDate.date);
      done();
    });
  });

  it('set multipleValue', done => {
    const TestCompo = {
      components: {
        zaCalendar,
      },
      template: `
      <za-calendar 
        ref='calendar'
        v-model="value" 
        multiple
      />
      `,
      data() {
        return {
          value: '',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const calendar = vm.$refs.calendar;
    const selectedDate = [calendar.monthList[0].dates[10], calendar.monthList[0].dates[20]];
    calendar._dateClick(selectedDate[0]);
    calendar._dateClick(selectedDate[1]);
    vm.$nextTick(() => {
      expect(vm.value[0]).toBe(selectedDate[0].date);
      expect(vm.value[1]).toBe(selectedDate[1].date);
      expect(vm.$el.querySelectorAll('inrange').length).toBe(11);
      done();
    });
  });
});
