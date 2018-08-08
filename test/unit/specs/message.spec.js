// import Message from '@/message';
// import { createTest, createVue, destroyVM } from '../util';

// describe('Message', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', done => {
//     vm = createTest(Message, {
//       prefixCls: 'za-message',
//       theme: 'primary',
//       size: 'lg',
//     }, true);
//     vm.$nextTick(() => {
//       const el = vm.$el;
//       expect(el.classList.contains('za-message')).to.be.true;
//       expect(el.classList.contains('theme-primary')).to.be.true;
//       expect(el.classList.contains('size-lg')).to.be.true;
//       done();
//     });
//   });

//   it('closable', done => {
//     vm = createVue({
//       template: `
//         <div>
//           <za-message theme='error' closable :visible.sync='visible'>链接样式的</za-message>
//         </div>
//       `,
//       data() {
//         return {
//           visible: true,
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       expect(vm.$el.querySelector('.za-icon-wrong')).to.exist;
//       vm.$el.querySelector('.za-icon-wrong').click();
//       setTimeout(() => {
//         expect(vm.visible).to.equal(false);
//         done();
//       }, 20);
//     });
//   });

//   it('hasArrow', done => {
//     let result;
//     vm = createVue({
//       template: `
//         <div>
//           <za-message ref='message' theme='warning' hasArrow @click='handleClick'>链接样式的</za-message>
//         </div>
//       `,
//       methods: {
//         handleClick(evt) {
//           result = evt;
//         },
//       },
//     }, true);
//     vm.$nextTick(() => {
//       expect(vm.$el.querySelector('.za-icon-arrow-right')).to.exist;
//       vm.$refs.message.$el.click();
//       setTimeout(() => {
//         expect(result).to.exist;
//         done();
//       }, 20);
//     });
//   });
// });
