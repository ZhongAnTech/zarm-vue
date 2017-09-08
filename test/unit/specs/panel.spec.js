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
          <za-panel-header title='普通列表项'/>
          <za-panel-body>
            <span>标题文字</span>
          </za-panel-body>
          <za-panel-footer more='more' title='footer'>
          </za-panel-footer>
        </za-panel>
      `,
    }, true);
    expect(vm.$el.classList.contains('za-panel'));
    expect(vm.$el.querySelector('.za-panel-header .za-panel-title').innerText).to.equal('普通列表项');
    expect(vm.$el.querySelector('.za-panel-body span').innerText).to.equal('标题文字');
    expect(vm.$el.querySelector('.za-panel-footer .za-panel-title').innerText).to.equal('footer');
    expect(vm.$el.querySelector('.za-panel-footer .za-panel-more').innerText).to.equal('more');
  });

  it('create using slot', () => {
    vm = createVue({
      template: `
        <za-panel>
          <za-panel-header>
            <span slot='title'>普通列表项</span>
            <span slot='more'>more</span>
          </za-panel-header>
          <za-panel-body>
            <span>标题文字</span>
          </za-panel-body>
          <za-panel-footer>
            <span slot='title'>title</span>
            <span slot='more'>more</span>
          </za-panel-footer>
        </za-panel>
      `,
    }, true);
    expect(vm.$el.classList.contains('za-panel'));
    expect(vm.$el.querySelector('.za-panel-header .za-panel-title span').innerText).to.equal('普通列表项');
    expect(vm.$el.querySelector('.za-panel-header .za-panel-more span').innerText).to.equal('more');
    expect(vm.$el.querySelector('.za-panel-body span').innerText).to.equal('标题文字');
    expect(vm.$el.querySelector('.za-panel-footer .za-panel-title span').innerText).to.equal('title');
    expect(vm.$el.querySelector('.za-panel-footer .za-panel-more span').innerText).to.equal('more');
  });
});
