// import { createVue, destroyVM } from '../util';

// describe('Switch', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', () => {
//     vm = createVue({
//       template: `
//         <za-switch theme='success' size='lg' ></za-switch>
//       `,
//     }, true);
//     expect(vm.$el.classList.contains('za-switch')).to.be.true;
//     expect(vm.$el.classList.contains('theme-success')).to.be.true;
//     expect(vm.$el.classList.contains('size-lg')).to.be.true;
//   });
//   it('default', () => {
//     vm = createVue({
//       template: `
//         <za-switch v-model='switch1'></za-switch>
//       `,
//       data() {
//         return {
//           switch1: true,
//         };
//       },
//     }, true);
//     expect(vm.$el.classList.contains('checked')).to.be.true;
//   });
//   it('click', done => {
//     let result;
//     vm = createVue({
//       template: `
//         <za-switch v-model='switch1' @change='handleChange'></za-switch>
//       `,
//       data() {
//         return {
//           switch1: true,
//         };
//       },
//       methods: {
//         handleChange(evt) {
//           result = evt;
//         },
//       },
//     }, true);
//     vm.$el.querySelector('input').click();
//     vm.$nextTick(() => {
//       expect(result).to.exist;
//       done();
//     });
//   });
// });
