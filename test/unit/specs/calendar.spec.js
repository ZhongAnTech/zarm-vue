import zaCalendar from '@/calendar';
import { mount } from '../util';

describe('Calendar', () => {
  const TestCompo = {
    components: {
      zaCalendar,
    },
    template: `
      <za-calendar 
        ref='calendar'
        defaultValue="2018-08-07"
        min="2018-05-06"
        max="2018-10-02"
        v-model='value'
        :multiple="multiple"
      />
    `,
    data: {
      value: '',
      multiple: false,
      max: "2018-10-02",
      min: "2018-05-06"
    },
  };
  const wrapper = mount(TestCompo);
  const { vm } = wrapper;
  const calendar = vm.$refs.calendar;
  it('set sigleValue', done => {
    expect(vm.$el.querySelectorAll('.active').length).toBe(1);
    calendar._dateClick(calendar.monthList[0].dates[0]);
    expect(vm.value).not.toBe(calendar.monthList[0].dates[0].date);
    calendar._dateClick(calendar.monthList[0].dates[10]);
    expect(vm.value).toBe(calendar.monthList[0].dates[10].date);
    calendar._dateClick(calendar.monthList[0].dates[10]);
    expect(vm.value).toBe(null);
    done();
  });

  it('sigle to multiple', done => {
    vm.multiple = true;
    vm.$forceUpdate();
    setTimeout(()=>{
      const disableSelectedDate = [calendar.monthList[0].dates[0], calendar.monthList[0].dates[4]];
      const selectedDate = [calendar.monthList[0].dates[10], calendar.monthList[0].dates[20]];

      calendar._dateClick(disableSelectedDate[0]);
      calendar._dateClick(disableSelectedDate[1]);
      expect(vm.value).toBe(null);

      calendar._dateClick(selectedDate[0]);
      calendar._dateClick(selectedDate[1]);
      
      expect(vm.value[0]).toBe(selectedDate[0].date);
      expect(vm.value[1]).toBe(selectedDate[1].date);
      calendar._dateClick(selectedDate[1]);
      expect(vm.value).toBe(null);
      done();
      
    },500)
  });
  it('set max', done =>{
    const TestCompo = {
      components: {
        zaCalendar,
      },
      template: `
        <za-calendar 
          ref='calendar'
          v-model='value'
          :multiple="multiple"
        />
      `,
      data: {
        value: '',
        multiple: false,
        max: "2018-10-02",
        min: "2018-05-06"
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const calendar = vm.$refs.calendar;
    vm.$forceUpdate();
    setTimeout(()=>{
      expect(calendar.max.getTime() == calendar.min.setFullYear(calendar.min.getFullYear() + 1)).toBe(true);
      done();
    })
  })
});
