import zaProgress from '@/progress';
import { mount } from '../util';

describe('Progress', () => {
  it('create', () => {
    const TestCompo = {
      components: {
        zaProgress,
      },
      template: `
        <za-progress :percent='percent' :theme='theme' type='line' :strokeWidth='10'>
          {{percent + '%'}}
        </za-progress>
      `,
      data() {
        return {
          percent: 0,
          theme: 'primary',
        };
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    expect(wrapper.contains('.za-progress')).toBe(true);
    expect(wrapper.contains('.theme-primary')).toBe(true);
    expect(wrapper.contains('.za-progress-line')).toBe(true);
    expect(vm.$el.querySelector('.za-progress-inner').style.height).toEqual('10px');
  })

  it('circle', () => {
    const TestCompo = {
      components: {
        zaProgress,
      },
      template: `
        <za-progress type='circle' :percent='percent' :theme='theme'>
          <span>{{percent}}%</span>
        </za-progress>
      `,
      data() {
        return {
          percent: 10,
          theme: 'primary',
        };
      },
    };
    const wrapper = mount(TestCompo);
    expect(wrapper.contains('.za-progress-circle')).toBe(true);
  })
})
// import { createVue, destroyVM } from '../util';

// describe('Progress', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', () => {
//     vm = createVue({
//       template: `
//         <za-progress :percent='percent' :theme='theme' type='line' :strokeWidth='10'>
//           {{percent + '%'}}
//         </za-progress>
//       `,
//       data() {
//         return {
//           percent: 0,
//           theme: 'primary',
//         };
//       },
//     }, true);
//     const el = vm.$el;
//     expect(el.classList.contains('za-progress'));
//     expect(el.classList.contains('theme-primary'));
//     expect(el.classList.contains('za-progress-line'));
//     expect(el.querySelector('.za-progress-inner').style.height).to.equal('10px');
//   });

//   it('circle', () => {
//     vm = createVue({
//       template: `
//         <za-progress type='circle' :percent='percent' :theme='theme'>
//           <span>{{percent}}%</span>
//         </za-progress>
//       `,
//       data() {
//         return {
//           percent: 10,
//           theme: 'primary',
//         };
//       },
//     }, true);
//     const el = vm.$el;
//     expect(el.classList.contains('za-progress-circle'));
//   });
// });
