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
    vm.$refs.calendar.setChanged('2018-02-23');
    vm.$nextTick(() => {
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
    vm.$refs.calendar.setChanged('2018-02-23');
    vm.$refs.calendar.setChanged('2018-03-20');
    vm.$nextTick(() => {
      expect(vm.value1[0]).to.equal('2018-02-23');
      expect(vm.value1[1]).to.equal('2018-03-20');
      done();
    });
  });
});
