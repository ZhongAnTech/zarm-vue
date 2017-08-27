import { createVue, destroyVM } from '../util';

describe('Progress', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('circle', () => {
    vm = createVue({
      template: `
        <za-progress :percent='percent' :theme='theme' type='line' strokeWidth='10'>
          {{percent + '%'}}
        </za-progress>
      `,
      data() {
        return {
          percent: 0,
        };
      },
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-progress'));
    expect(el.classList.contains('theme-primary'));
    expect(el.classList.contains('za-progress-line'));
    expect(el.querySelector('.za-progress-inner').style.height).to.equal('10px');
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-progress type='circle' :percent='percent' :theme='theme'>
          <span>{{percent}}%</span>
        </za-progress>
      `,
      data() {
        return {
          percent: 10,
        };
      },
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-progress-circle'));
  });
});
