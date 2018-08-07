// import Tabs from '@/tabs';
// import { createTest, createVue, destroyVM } from '../util';

// describe('Tabs', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', () => {
//     vm = createTest(Tabs, {
//       prefixCls: 'za-tab',
//       theme: 'primary',
//     }, true);
//     const el = vm.$el;
//     expect(el.classList.contains('za-tab')).to.be.true;
//     expect(el.classList.contains('theme-primary')).to.be.true;
//   });

//   it('change active tab', done => {
//     let result;
//     vm = createVue({
//       template: `
//         <za-tabs v-model="activeName" @change="handleClick">
//           <za-tab-pane label='用户管理' name='first'>
//             <div class='content'>用户管理</div>
//           </za-tab-pane>
//           <za-tab-pane label='配置管理' name='second'>
//             <div class='content'>配置管理</div>
//           </za-tab-pane>
//           <za-tab-pane label='角色管理' name='third'>
//             <div class='content'>角色管理</div>
//           </za-tab-pane>
//         </za-tabs>
//       `,
//       methods: {
//         handleClick(evt) {
//           result = evt;
//         },
//       },
//       data() {
//         return {
//           activeName: 'first',
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       vm.$el.querySelectorAll('.za-tab-header-item')[1].click();
//       expect(result).to.exist;
//       expect(vm.activeName === 'second').to.true;
//       done();
//     });
//   });
// });
