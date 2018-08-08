// import { createVue, destroyVM } from '../util';
// import { dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from '../touchs';

// const REFRESH_STATE = {
//   normal: 0, // 普通
//   pull: 1, // 下拉状态（未满足刷新条件）
//   drop: 2, // 可释放状态（满足刷新条件）
//   loading: 3, // 加载中
//   success: 4, // 加载成功
//   failure: 5, // 加载失败
// };

// const LOAD_STATE = {
//   normal: 0,  // 普通
//   abort: 1, // 中止
//   loading: 2, // 加载中
//   success: 3, // 加载成功
//   failure: 4, // 加载失败
//   complete: 5, // 加载完成（无新数据）
// };

// describe('Pull', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', done => {
//     vm = createVue({
//       template: `
//         <za-pull>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//         </za-pull>
//       `,
//     }, true);
//     vm.$nextTick(() => {
//       const el = vm.$el;
//       expect(el.classList.contains('za-pull')).to.be.true;
//       done();
//     });
//   });

//   it('refreshing and success', done => {
//     vm = createVue({
//       template: `
//         <za-pull :refreshing='refreshing' :duration='50'>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//         </za-pull>
//       `,
//       data() {
//         return {
//           refreshing: true,
//         };
//       },
//     }, true);
//     vm.$nextTick(() => {
//       const el = vm.$el;
//       expect(el.getElementsByTagName('svg')[0].classList.contains('rotate360')).to.be.true;
//       done();
//     });
//   });

//   it('drag refreshing', done => {
//     vm = createVue({
//       template: `
//         <za-pull :refreshing='refreshing' :onRefresh='refresh(1)'>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//         </za-pull>
//       `,
//       data() {
//         return {
//           refreshing: false,
//         };
//       },
//       methods: {
//         refresh() {
//           return () => new Promise((resolve) => {
//             this.refreshing = true;
//             resolve(true);
//           });
//         },
//       },
//     }, true);
//     vm.$nextTick(() => {
//       const wrapper = vm.$el;
//       dispatchTouchStart(wrapper, {
//         pageX: 50,
//         pageY: 0,
//       });
//       dispatchTouchMove(wrapper, {
//         pageX: 50,
//         pageY: 50,
//       });
//       dispatchTouchEnd(wrapper, {
//         pageX: 50,
//         pageY: 50,
//       });
//       done();
//     });
//   });

//   it('pull and drop', done => {
//     vm = createVue({
//       template: `
//         <za-pull :duration='50' ref='pull'>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//         </za-pull>
//       `,
//     }, true);
//     const el = vm.$el;
//     vm.$refs.pull.doRefreshAction(REFRESH_STATE.pull, 10);
//     vm.$nextTick(() => {
//       expect(el.getElementsByTagName('svg')[0].classList.contains('za-spinner')).to.be.true;
//       vm.$refs.pull.doRefreshAction(REFRESH_STATE.drop, 110);
//       vm.$nextTick(() => {
//         expect(el.getElementsByTagName('svg')[0].classList.contains('za-spinner')).to.be.true;
//         done();
//       });
//     });
//   });

//   it('customer render refresh', done => {
//     vm = createVue({
//       template: `
//         <za-pull :duration='50' ref='pull'>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//           <template slot-scope='props' slot='refreshPull'>
//             <div class='custom-control1'>
//               <span>下拉中</span>
//             </div>
//           </template>
//           <template slot-scope='props' slot='refreshDrop'>
//             <div class='custom-control2'>
//               <span>释放加载</span>
//             </div>
//           </template>
//           <template slot-scope='props' slot='refreshLoading'>
//             <div class='custom-control3'>
//               <span>加载中</span>
//             </div>
//           </template>
//           <template slot-scope='props' slot='refreshSuccess'>
//             <div class='custom-control4'>
//               <span>加载成功</span>
//             </div>
//           </template>
//         </za-pull>
//       `,
//     }, true);
//     const el = vm.$el;
//     vm.$refs.pull.doRefreshAction(REFRESH_STATE.pull, 10);
//     vm.$nextTick(() => {
//       expect(el.querySelector('.custom-control1')).to.exist;
//       vm.$refs.pull.doRefreshAction(REFRESH_STATE.drop, 110);
//       vm.$nextTick(() => {
//         expect(el.querySelector('.custom-control2')).to.exist;
//         vm.$refs.pull.doRefreshAction(REFRESH_STATE.loading, 100);
//         vm.$nextTick(() => {
//           expect(el.querySelector('.custom-control3')).to.exist;
//           vm.$refs.pull.doRefreshAction(REFRESH_STATE.success, 100);
//           vm.$nextTick(() => {
//             expect(el.querySelector('.custom-control4')).to.exist;
//             done();
//           });
//         });
//       });
//     });
//   });

//   it('customer render load success', done => {
//     vm = createVue({
//       template: `
//         <za-pull :duration='50' ref='pull'>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//           <template slot-scope='props' slot='loadComplete'>
//             <div class='custom-control1'>
//               <span>没有更多了</span>
//             </div>
//           </template>
//           <template slot-scope='props' slot='loadLoading'>
//             <div class='custom-control3'>
//               <span>加载成功</span>
//             </div>
//           </template>
//         </za-pull>
//       `,
//     }, true);
//     const el = vm.$el;
//     vm.$refs.pull.doLoadAction(LOAD_STATE.loading, 10);
//     vm.$nextTick(() => {
//       expect(el.querySelector('.custom-control3')).to.exist;
//       vm.$refs.pull.doLoadAction(LOAD_STATE.complete, 110);
//       vm.$nextTick(() => {
//         expect(el.querySelector('.custom-control1')).to.exist;
//         done();
//       });
//     });
//   });

//   it('customer render load failure', done => {
//     vm = createVue({
//       template: `
//         <za-pull :duration='50' ref='pull'>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//           <template slot-scope='props' slot='loadFailure'>
//             <div class='custom-control2'>
//               <span>加载失败</span>
//             </div>
//           </template>
//           <template slot-scope='props' slot='loadLoading'>
//             <div class='custom-control3'>
//               <span>加载成功</span>
//             </div>
//           </template>
//         </za-pull>
//       `,
//     }, true);
//     const el = vm.$el;
//     vm.$refs.pull.doLoadAction(LOAD_STATE.loading, 10);
//     vm.$nextTick(() => {
//       expect(el.querySelector('.custom-control3')).to.exist;
//       vm.$refs.pull.doLoadAction(LOAD_STATE.failure, 110);
//       vm.$nextTick(() => {
//         expect(el.querySelector('.custom-control2')).to.exist;
//         done();
//       });
//     });
//   });
// });
