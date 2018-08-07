// import { createVue, destroyVM } from '../util';

// describe('Toast', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', () => {
//     vm = createVue({
//       template: `
//         <za-toast :visible.sync='visible'>默认3秒自动关闭</za-toast>
//       `,
//       data() {
//         return {
//           visible: true,
//         };
//       },
//     }, true);
//     expect(vm.$el.classList.contains('za-toast')).to.be.true;
//     expect(vm.$el.classList.contains('za-toast-open')).to.be.true;
//   });

//   it('open and close', done => {
//     vm = createVue({
//       template: `
//         <za-toast :visible.sync='visible' :duration='30'>默认3秒自动关闭</za-toast>
//       `,
//       data() {
//         return {
//           visible: true,
//         };
//       },
//     }, true);
//     expect(vm.$el.classList.contains('za-toast-open')).to.be.true;
//     setTimeout(() => {
//       expect(vm.$el.classList.contains('za-toast-open')).to.be.false;
//       vm.visible = true;
//       setTimeout(() => {
//         expect(vm.$el.classList.contains('za-toast-open')).to.be.true;
//         done();
//       }, 30);
//     }, 60);
//   });

//   it('close on modal', done => {
//     vm = createVue({
//       template: `
//         <za-toast :visible.sync='visible' :close-on-click-modal='true'>默认3秒自动关闭</za-toast>
//       `,
//       data() {
//         return {
//           visible: true,
//         };
//       },
//     }, true);
//     vm.$el.querySelector('.za-mask').click();
//     setTimeout(() => {
//       expect(vm.$el.classList.contains('za-toast-open')).to.be.false;
//       done();
//     }, 60);
//   });

//   it('$zaToast', done => {
//     vm = createVue({
//       template: `
//         <div @click='handleClick'>test</div>
//       `,
//       methods: {
//         handleClick() {
//           this.$zaToast('test');
//         },
//       },
//     }, true);
//     vm.$el.click();
//     vm.$nextTick(() => {
//       expect(document.querySelector('.za-toast')).to.exist;
//       done();
//     });
//   });

//   it('$zaToast with options', done => {
//     vm = createVue({
//       template: `
//         <div @click='handleClick'>test</div>
//       `,
//       methods: {
//         handleClick() {
//           this.$zaToast({
//             message: 'test',
//           });
//         },
//       },
//     }, true);
//     vm.$el.click();
//     vm.$nextTick(() => {
//       expect(document.querySelector('.za-toast .za-toast-container').innerText).to.equal('test');
//       done();
//     });
//   });

//   it('$zaLoading', done => {
//     vm = createVue({
//       template: `
//         <div @click='handleClick'>test</div>
//       `,
//       methods: {
//         handleClick() {
//           const loading = this.$zaLoading();
//           setTimeout(() => {
//             loading.close();
//           }, 50);
//         },
//       },
//     }, true);
//     vm.$el.click();
//     setTimeout(() => {
//       expect(document.querySelector('.za-loading-open')).to.exist;
//       setTimeout(() => {
//         expect(document.querySelector('.za-loading-open')).to.not.exist;
//         done();
//       }, 100);
//     }, 20);
//   });

//   it('v-za-loading', done => {
//     vm = createVue({
//       template: `
//         <div v-za-loading='isLoading' @click='handleClick'>test</div>
//       `,
//       data() {
//         return {
//           isLoading: false,
//         };
//       },
//       methods: {
//         handleClick() {
//           this.isLoading = true;
//           setTimeout(() => {
//             this.isLoading = false;
//           }, 50);
//         },
//       },
//     }, true);
//     vm.$el.click();
//     setTimeout(() => {
//       expect(document.querySelector('.za-loading-open')).to.exist;
//       setTimeout(() => {
//         expect(document.querySelector('.za-loading-open')).to.not.exist;
//         done();
//       }, 100);
//     }, 20);
//   });
// });
