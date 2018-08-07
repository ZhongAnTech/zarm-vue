// import { createVue, destroyVM } from '../util';
// import { dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from '../touchs';

// describe('SwipeAction', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', () => {
//     vm = createVue({
//       template: `
//       <za-swipe-action
//         theme='primary'
//         autoClose
//         :right="action1">
//         <za-cell>左滑看看</za-cell>
//       </za-swipe-action>
//       `,
//       data() {
//         return {
//           action1: [
//             {
//               theme: 'error',
//               text: '右按钮1',
//               onClick: () => {},
//             },
//             {
//               theme: 'success',
//               text: '右按钮2',
//               onClick: () => {},
//             },
//           ],
//         };
//       },
//     }, true);
//     expect(vm.$el.classList.contains('za-swipeAction')).to.true;
//     vm.$destroy();
//   });

//   it('btn click', done => {
//     let result;
//     vm = createVue({
//       template: `
//       <za-swipe-action
//         theme='primary'
//         autoClose
//         :right="action1">
//         <za-cell>左滑看看</za-cell>
//       </za-swipe-action>
//       `,
//       data() {
//         return {
//           action1: [
//             {
//               theme: 'error',
//               text: '右按钮1',
//               onClick: () => {
//                 result = 'isClicked';
//               },
//             },
//             {
//               theme: 'success',
//               text: '右按钮2',
//               onClick: () => {},
//             },
//           ],
//         };
//       },
//     }, true);
//     const el = vm.$el;
//     el.querySelector('.theme-error').click();
//     vm.$nextTick(() => {
//       expect(result).to.equal('isClicked');
//       done();
//     });
//   });

//   it('disabled', done => {
//     vm = createVue({
//       template: `
//       <za-swipe-action
//         theme='primary'
//         disabled
//         :left="action1">
//         <za-cell>左滑看看</za-cell>
//       </za-swipe-action>
//       `,
//       data() {
//         return {
//           action1: [
//             {
//               theme: 'error',
//               text: '右按钮1',
//               onClick: () => {},
//             },
//             {
//               theme: 'success',
//               text: '右按钮2',
//               onClick: () => {},
//             },
//           ],
//         };
//       },
//     }, true);
//     const wrapper = vm.$el.querySelector('.za-swipeAction-content');
//     dispatchTouchStart(wrapper, {
//       pageX: 10,
//       pageY: 10,
//     });
//     dispatchTouchMove(wrapper, {
//       pageX: -300,
//       pageY: 10,
//     });
//     dispatchTouchEnd(wrapper, {
//       pageX: -300,
//       pageY: 10,
//     });
//     vm.$nextTick(() => {
//       done();
//     });
//   });

//   it('drag move left', done => {
//     vm = createVue({
//       template: `
//       <za-swipe-action
//         theme='primary'
//         autoClose
//         :right="action1">
//         <za-cell>左滑看看</za-cell>
//       </za-swipe-action>
//       `,
//       data() {
//         return {
//           action1: [
//             {
//               theme: 'error',
//               text: '右按钮1',
//               onClick: () => {},
//             },
//             {
//               theme: 'success',
//               text: '右按钮2',
//               onClick: () => {},
//             },
//           ],
//         };
//       },
//     }, true);
//     const wrapper = vm.$el.querySelector('.za-swipeAction-content');
//     dispatchTouchStart(wrapper, {
//       pageX: 10,
//       pageY: 10,
//     });
//     dispatchTouchMove(wrapper, {
//       pageX: -300,
//       pageY: 10,
//     });
//     dispatchTouchEnd(wrapper, {
//       pageX: -300,
//       pageY: 10,
//     });
//     vm.$nextTick(() => {
//       done();
//     });
//   });

//   it('drag move right', done => {
//     vm = createVue({
//       template: `
//       <za-swipe-action
//         theme='primary'
//         autoClose
//         :left="action1">
//         <za-cell>左滑看看</za-cell>
//       </za-swipe-action>
//       `,
//       data() {
//         return {
//           action1: [
//             {
//               theme: 'error',
//               text: '右按钮1',
//               onClick: () => {},
//             },
//             {
//               theme: 'success',
//               text: '右按钮2',
//               onClick: () => {},
//             },
//           ],
//         };
//       },
//     }, true);
//     const wrapper = vm.$el.querySelector('.za-swipeAction-content');
//     dispatchTouchStart(wrapper, {
//       pageX: 10,
//       pageY: 10,
//     });
//     dispatchTouchMove(wrapper, {
//       pageX: 300,
//       pageY: 10,
//     });
//     dispatchTouchEnd(wrapper, {
//       pageX: 300,
//       pageY: 10,
//     });
//     vm.$nextTick(() => {
//       done();
//     });
//   });
// });
