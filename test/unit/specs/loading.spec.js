// import { createVue, destroyVM } from '../util';

// describe('Loading', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', done => {
//     vm = createVue({
//       template: `
//         <za-loading ref='loading' :visible.sync='visible'></za-loading>
//       `,
//       data() {
//         return {
//           visible: true,
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       expect(vm.$el.classList.contains('za-loading')).to.be.true;
//       done();
//     });
//   });

//   it('hide', done => {
//     vm = createVue({
//       template: `
//         <za-loading :visible.sync='visible'></za-loading>
//       `,
//       data() {
//         return {
//           visible: true,
//         };
//       },
//     }, true);
//     vm.visible = false;
//     vm.$nextTick(() => {
//       expect(vm.$el.classList.contains('za-loading-open')).to.be.false;
//       done();
//     });
//   });
// });
