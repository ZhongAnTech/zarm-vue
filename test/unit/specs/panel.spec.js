import ZaPanel from '@/panel';
import ZaPanelBody from '@/panel-body';
import ZaPanelHeader from '@/panel-header';
import ZaPanelFooter from '@/panel-footer';
import { mount } from '../util';

describe('Panel', () => {
  it('create', () => {
    const wrapper = mount({
      components: { ZaPanel, ZaPanelBody, ZaPanelHeader, ZaPanelFooter },
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
    expect(wrapper.classes().includes('za-panel')).toBe(true);
    expect(wrapper.find('.za-panel-header .za-panel-title').text()).toBe('普通列表项');
    expect(wrapper.find('.za-panel-body span').text()).toBe('标题文字');
    expect(wrapper.find('.za-panel-footer .za-panel-title').text()).toBe('footer');
    expect(wrapper.find('.za-panel-footer .za-panel-more').text()).toBe('more');
  });

  it('create using slot', () => {
    const wrapper = mount({
      components: { ZaPanel, ZaPanelBody, ZaPanelHeader, ZaPanelFooter },
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
    expect(wrapper.classes().includes('za-panel')).toBe(true);
    expect(wrapper.find('.za-panel-header .za-panel-title span').text()).toBe('普通列表项');
    expect(wrapper.find('.za-panel-header .za-panel-more span').text()).toBe('more');
    expect(wrapper.find('.za-panel-body span').text()).toBe('标题文字');
    expect(wrapper.find('.za-panel-footer .za-panel-title span').text()).toBe('title');
    expect(wrapper.find('.za-panel-footer .za-panel-more span').text()).toBe('more');
  });
});
