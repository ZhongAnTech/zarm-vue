import { createVue, destroyVM } from '../util';

describe('Panel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-panel>
          <za-panel-header>
            <za-panel-title><span>普通列表项</span></za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <span>标题文字</span>
          </za-panel-body>
          <za-panel-footer>
            <span>footer</span>
          </za-panel-footer>
          <za-panel-more>
            <span>more</span>
          </za-panel-more>
        </za-panel>
      `,
    }, true);
    expect(vm.$el.classList.contains('za-panel'));
    expect(vm.$el.querySelector('.za-panel-title span').innerText).to.equal('普通列表项');
    expect(vm.$el.querySelector('.za-panel-body span').innerText).to.equal('标题文字');
    expect(vm.$el.querySelector('.za-panel-footer span').innerText).to.equal('footer');
    expect(vm.$el.querySelector('.za-panel-more span').innerText).to.equal('more');
  });
});
