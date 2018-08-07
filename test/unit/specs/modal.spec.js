// import { createVue, destroyVM } from '../util';

// describe('Modal', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', done => {
//     vm = createVue({
//       template: `
//         <za-modal :visible.sync='visible' :title="title">
//           模态框内容
//         </za-modal>
//       `,
//       data() {
//         return {
//           visible: true,
//           title: 'dialog',
//         };
//       },
//     }, true);

//     vm.$nextTick(() => {
//       setTimeout(() => {
//         expect(document.querySelector('.za-modal')).to.exist;
//         expect(vm.$el.style.display).to.not.equal('none');
//         done();
//       }, 20);
//     });
//   });

//   it('render good', done => {
//     vm = createVue({
//       template: `
//         <za-modal :visible.sync='visible' :title="title">
//           <span>模态框内容</span>
//           <div slot='footer'><span>{{footer}}</span></div>
//         </za-modal>
//       `,
//       data() {
//         return {
//           visible: true,
//           title: 'dialog title',
//           footer: 'this is footer',
//         };
//       },
//     }, true);

//     vm.$nextTick(() => {
//       expect(document.querySelector('.za-modal-footer span').textContent).to.equal('this is footer');
//       expect(document.querySelector('.za-modal-body span').textContent).to.equal('模态框内容');
//       done();
//     });
//   });

//   it('open and close', done => {
//     vm = createVue({
//       template: `
//         <za-modal :visible.sync='visible' :title="title" :close-on-click-modal='true' :showClose='true'>
//           <span>模态框内容</span>
//           <div slot='footer'><span>{{footer}}</span></div>
//         </za-modal>
//       `,
//       data() {
//         return {
//           visible: false,
//           title: 'dialog title',
//           footer: 'this is footer',
//         };
//       },
//     }, true);
//     vm.visible = true;
//     vm.$nextTick(() => {
//       expect(vm.$el.style.display).to.not.equal('none');
//       document.querySelector('.za-mask').click();
//       vm.$nextTick(() => {
//         expect(vm.visible).to.equal(false);
//         vm.visible = true;
//         vm.$nextTick(() => {
//           document.querySelector('.za-icon-wrong').click();
//           vm.$nextTick(() => {
//             expect(vm.visible).to.equal(false);
//             done();
//           });
//         });
//       });
//     });
//   });

//   it('animation', done => {
//     vm = createVue({
//       template: `
//         <za-modal
//           :visible.sync='visible'
//           :title="title"
//           :showClose='true'
//           animationType="rotate"
//           :animationDuration='animationDuration'
//           :maskType='maskType'>
//           <span>模态框内容</span>
//           <div slot='footer'><span>{{footer}}</span></div>
//         </za-modal>
//       `,
//       data() {
//         return {
//           visible: true,
//           title: 'dialog title',
//           footer: 'this is footer',
//           animationDuration: 100,
//           maskType: 'transparent',
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       expect(document.querySelector('.za-modal-dialog').classList.contains('rotate-enter')).to.true;
//       expect(document.querySelector('.za-mask').classList.contains('transparent')).to.true;
//       done();
//     });
//   });
// });
