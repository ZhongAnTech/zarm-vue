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
        :defaultValue="defaultValue"
        :disabledDate="disabledDate"
        min="2018/05/06"
        max="2018/10/02"
        v-model='value'
        :multiple="multiple"
      />
    `,
    methods: {
      disabledDate(date) {
        return date.getDate() === 28;// 10倍数的可用
      },
    },
    data: {
      value: '2018/05/08',
      multiple: false,
      max: '2018-10-02',
      min: '2018-05-06',
      defaultValue: '2018/08/07',
    },
  };
  const wrapper = mount(TestCompo);
  const { vm } = wrapper;
  const calendar = vm.$refs.calendar;
  it('set sigleValue', done => {
    expect(calendar.monthList.find(month => {
      return !month.dates[27].disabled
    })).toBe(undefined);
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
    const disableSelectedDate = [calendar.monthList[0].dates[0], calendar.monthList[0].dates[4]];
    const selectedDate = [calendar.monthList[0].dates[10], calendar.monthList[0].dates[20]];
    vm.defaultValue = [selectedDate[0].date, selectedDate[1].date];
    vm.$forceUpdate();
    setTimeout(() => {
      calendar._dateClick(disableSelectedDate[0]);
      calendar._dateClick(disableSelectedDate[1]);
      expect(vm.value.length === 2).toBe(true);

      calendar._dateClick(selectedDate[0]);
      calendar._dateClick(selectedDate[1]);

      expect(vm.value).toEqual([selectedDate[0].date, selectedDate[1].date]);
      calendar._dateClick(selectedDate[1]);
      expect(vm.value).toBe(null);
      done();

    }, 500)
  });
  it('default max', done => {
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
        max: '2018-10-02',
        min: '2018-05-06',
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const calendar = vm.$refs.calendar;
    vm.$forceUpdate();
    setTimeout(() => {
      expect(calendar.max.getTime() == calendar.min.setFullYear(calendar.min.getFullYear() + 1)).toBe(true);
      done();
    })
  })
});
