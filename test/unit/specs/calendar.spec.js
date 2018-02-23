import { createVue, destroyVM } from '../util';

describe('Calendar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
      <za-calendar />
      `,
    }, true);
    expect(vm.$el.classList.contains('za-calendar')).to.be.true;
  });

  it('set selectedValue', done => {
    vm = createVue({
      template: `
      <za-calendar 
      ref='calendar'
      :visible.sync='visible' 
      @changed='changeDate' 
      @ok='handleOk1' 
      :selectedValue='value1' />
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
    }, true);
    vm.visible = true;
    vm.$nextTick(() => {
      vm.$refs.calendar.setChanged('2018-02-23');
      const value = vm.$el.querySelector('.za-calendar-selected').dataset.value;
      expect(value).to.equal('2018-02-23');
      expect(vm.value1[0]).to.equal('2018-02-23');
      done();
    });
  });

  it('set selectedRangeValue', done => {
    vm = createVue({
      template: `
      <za-calendar 
      ref='calendar'
      :multiSelected='isMultiSelected'
      :visible.sync='visible' 
      @changed='changeDate' 
      @ok='handleOk1' 
      :selectedValue='value1' />
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
    }, true);
    vm.visible = true;
    vm.$nextTick(() => {
      vm.$refs.calendar.setChanged('2018-02-23');
      vm.$refs.calendar.setChanged('2018-03-20');
      // console.log(vm.$el);
      const selectedRangeStartValue = vm.$el.querySelector('.za-calendar-start-selected').dataset.value;
      const selectedRangeEndValue = vm.$el.querySelector('.za-calendar-end-selected').dataset.value;
      expect(selectedRangeStartValue).to.equal('2018-02-23');
      expect(selectedRangeEndValue).to.equal('2018-03-20');
      expect(vm.value1[0]).to.equal('2018-02-23');
      expect(vm.value1[1]).to.equal('2018-03-20');
      done();
    });
  });
});
