// import Stepper from '@/stepper';
// import { createTest, createVue, destroyVM } from '../util';

// describe('Stepper', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', () => {
//     vm = createTest(Stepper, {
//       prefixCls: 'za-stepper',
//       theme: 'primary',
//       size: 'xl',
//       shape: 'radius',
//     }, true);
//     const el = vm.$el;
//     expect(el.classList.contains('za-stepper')).to.be.true;
//     expect(el.classList.contains('theme-primary')).to.be.true;
//     expect(el.classList.contains('size-xl')).to.be.true;
//     expect(el.classList.contains('shape-radius')).to.be.true;
//   });

//   it('input value', done => {
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper'></za-stepper>
//       `,
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       vm.stepper = 12;
//       vm.$nextTick(() => {
//         expect(vm.$el.querySelector('input').value).to.equal('12');
//         done();
//       });
//     });
//   });

//   it('input limit min', done => {
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper' :min="-3"></za-stepper>
//       `,
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       vm.stepper = -4;
//       expect(vm.$el.querySelector('input').value).to.equal('0');
//       done();
//     });
//   });

//   it('input limit max', done => {
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper' :max="3"></za-stepper>
//       `,
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       vm.stepper = 4;
//       expect(vm.$el.querySelector('input').value).to.equal('0');
//       done();
//     });
//   });

//   it('add and minus', done => {
//     let result;
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper' @change='handleChange'></za-stepper>
//       `,
//       methods: {
//         handleChange(evt) {
//           result = evt;
//         },
//       },
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$el.querySelector('.za-stepper-sub').click();
//     vm.$nextTick(() => {
//       expect(result).to.exist;
//       expect(vm.stepper).to.equal(-1);
//       vm.$el.querySelector('.za-stepper-plus').click();
//       vm.$nextTick(() => {
//         expect(vm.stepper).to.equal(0);
//         done();
//       });
//     });
//   });

//   it('add and minus with step = 2', done => {
//     let result;
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper' @change='handleChange' :step='2'></za-stepper>
//       `,
//       methods: {
//         handleChange(evt) {
//           result = evt;
//         },
//       },
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$el.querySelector('.za-stepper-sub').click();
//     vm.$nextTick(() => {
//       expect(result).to.exist;
//       expect(vm.stepper).to.equal(-2);
//       vm.$el.querySelector('.za-stepper-plus').click();
//       vm.$nextTick(() => {
//         expect(vm.stepper).to.equal(0);
//         done();
//       });
//     });
//   });

//   it('disabled', done => {
//     let result;
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper' @change='handleChange' disabled></za-stepper>
//       `,
//       methods: {
//         handleChange(evt) {
//           result = evt;
//         },
//       },
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$el.querySelector('.za-stepper-sub').click();
//     vm.$nextTick(() => {
//       expect(result).to.not.exist;
//       expect(vm.stepper).to.equal(0);
//       done();
//     });
//   });

//   it('min', done => {
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper' :min='-3' :step='10'></za-stepper>
//       `,
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$el.querySelector('.za-stepper-sub').click();
//     vm.$nextTick(() => {
//       expect(vm.stepper).to.equal(-3);
//       done();
//     });
//   });

//   it('max', done => {
//     vm = createVue({
//       template: `
//         <za-stepper v-model='stepper' :max='3' :step='5'></za-stepper>
//       `,
//       data() {
//         return {
//           stepper: 0,
//         };
//       },
//     }, true);
//     vm.$el.querySelector('.za-stepper-plus').click();
//     vm.$nextTick(() => {
//       expect(vm.stepper).to.equal(3);
//       done();
//     });
//   });
// });
