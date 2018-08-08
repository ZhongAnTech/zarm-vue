// import Slider from '@/slider';
// import { createVue, createTest, destroyVM } from '../util';
// import { dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from '../touchs';

// describe('Slider', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', done => {
//     vm = createVue({
//       template: `
//       <za-slider
//       :value='0'
//       ></za-slider>
//       `,
//     }, true);
//     vm.$nextTick(() => {
//       expect(vm.$el.classList.contains('za-slider')).to.be.true;
//       done();
//     });
//   });

//   it('slider shadow position', done => {
//     vm = createTest(Slider, {
//       prefixCls: 'za-slider',
//     }, true);
//     vm.$nextTick(() => { // eslint-disable-line no-unused-vars
//       vm.$el.click();
//       done();
//     });
//   });

//   it('change value', done => {
//     vm = createVue({
//       template: `
//        <za-slider
//        ref='slider'
//        @change='handleChange'
//        ></za-slider>
//       `,
//       methods: {
//         handleChange(ev, v) {
//           console.log(v); // eslint-disable-line
//         },
//       },
//     }, true);
//     vm.$nextTick(() => {
//       expect(vm.$el.classList.contains('za-slider')).to.be.true;
//       vm.value = 10;
//       done();
//     });
//   });

//   it('drag', done => {
//     let result;
//     vm = createVue({
//       template: `
//        <za-slider
//        ref='slider'
//        @change='handleChange'
//        ></za-slider>
//       `,
//       methods: {
//         handleChange(ev, v) {
//           result = v;
//         },
//       },
//     }, true);
//     const wrapper = vm.$el.querySelector('.za-slider-handle');
//     dispatchTouchStart(wrapper, {
//       pageX: 50,
//       pageY: 50,
//     });
//     dispatchTouchMove(wrapper, {
//       pageX: 150,
//       pageY: 50,
//     });
//     dispatchTouchEnd(wrapper, {
//       pageX: 150,
//       pageY: 50,
//     });
//     vm.$nextTick(() => {
//       expect(result).to.exsit;
//       done();
//     });
//   });

//   it('drag min offset', done => {
//     let result;
//     vm = createVue({
//       template: `
//        <za-slider
//        ref='slider'
//        @change='handleChange'
//        ></za-slider>
//       `,
//       methods: {
//         handleChange(ev, v) {
//           result = v;
//         },
//       },
//     }, true);
//     const wrapper = vm.$el.querySelector('.za-slider-handle');
//     dispatchTouchStart(wrapper, {
//       pageX: 50,
//       pageY: 50,
//     });
//     dispatchTouchMove(wrapper, {
//       pageX: -500,
//       pageY: 50,
//     });
//     dispatchTouchEnd(wrapper, {
//       pageX: -500,
//       pageY: 50,
//     });
//     vm.$nextTick(() => {
//       expect(result).to.exsit;
//       done();
//     });
//   });

//   it('drag max offset', done => {
//     let result;
//     vm = createVue({
//       template: `
//        <za-slider
//        ref='slider'
//        @change='handleChange'
//        ></za-slider>
//       `,
//       methods: {
//         handleChange(ev, v) {
//           result = v;
//         },
//       },
//     }, true);
//     const wrapper = vm.$el.querySelector('.za-slider-handle');
//     dispatchTouchStart(wrapper, {
//       pageX: 50,
//       pageY: 50,
//     });
//     dispatchTouchMove(wrapper, {
//       pageX: 1000,
//       pageY: 50,
//     });
//     dispatchTouchEnd(wrapper, {
//       pageX: 1000,
//       pageY: 50,
//     });
//     vm.$nextTick(() => {
//       expect(result).to.exsit;
//       done();
//     });
//   });
// });
