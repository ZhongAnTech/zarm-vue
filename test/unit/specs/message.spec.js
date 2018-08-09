import ZaMessage from '@/message';
import { mount } from '../util';

describe('ZaMessage', () => {
  it('create', () => {
    const wrapper = mount(ZaMessage, {
      propsData: {
        prefixCls: 'za-message',
        theme: 'primary',
        size: 'lg',
      },
    }, true);
    expect(wrapper.contains('.za-message')).toBe(true);
    expect(wrapper.contains('.theme-primary')).toBe(true);
    expect(wrapper.contains('.size-lg')).toBe(true);
  });

  it('closable', () => {
    const wrapper = mount({
      components: { ZaMessage },
      template: `
        <div>
          <za-message theme='error' closable :visible.sync='visible'>链接样式的</za-message>
        </div>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    expect(wrapper.find('.za-icon-wrong').exists()).toBe(true);
    wrapper.find('.za-icon-wrong').trigger('click');
    expect(wrapper.vm.visible).toBe(false);
  });

  it('hasArrow', () => {
    let result;
    const wrapper = mount({
      components: { ZaMessage },
      template: `
        <div>
          <za-message ref='message' theme='warning' hasArrow @click='handleClick'>链接样式的</za-message>
        </div>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
    }, true);
    expect(wrapper.find('.za-icon-arrow-right').exists()).toBe(true);
    wrapper.find('.za-message').trigger('click');
    expect(result).toBeDefined();
  });
});
