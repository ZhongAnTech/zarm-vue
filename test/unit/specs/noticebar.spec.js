import ZaNoticeBar from '@/notice-bar';
import { mount } from '../util';


describe('NoticeBar', () => {
  it('create', () => {
    const wrapper = mount({
      components: { ZaNoticeBar },
      template: `
        <za-notice-bar theme='primary' size='lg'>noticeBar</za-notice-bar>
      `,
    }, true);
    expect(wrapper.classes().includes('za-message')).toBe(true);
    expect(wrapper.classes().includes('za-message--primary')).toBe(true);
    expect(wrapper.classes().includes('za-message--lg')).toBe(true);
  });
  it('hasArrow', () => {
    const wrapper = mount({
      components: { ZaNoticeBar },
      template: `
        <za-notice-bar hasArrow >noticeBar</za-notice-bar>
      `,
    }, true);
    expect(wrapper.find('.za-icon-arrow-right').exists()).toBe(true);
  });
  it('closable', () => {
    const wrapper = mount({
      components: { ZaNoticeBar },
      template: `
        <za-notice-bar closable >noticeBar</za-notice-bar>
      `,
    }, true);
    expect(wrapper.find('.za-icon-wrong').exists()).toBe(true);
  });
  it('icon', () => {
    const wrapper = mount({
      components: { ZaNoticeBar },
      template: `
      <za-notice-bar icon='wrong-round'>
        自定义icon，自定义主题，显示关闭按钮。
      </za-notice-bar>
      `,
    }, true);
    expect(wrapper.find('.za-icon-wrong-round').exists()).toBe(true);
  });
  it('unmount', () => {
    const wrapper = mount({
      components: { ZaNoticeBar },
      template: `
      <div>
        <za-notice-bar icon='wrong-round' v-if='visible'>
        自定义icon，自定义主题，显示关闭按钮。
        </za-notice-bar>
      </div>
      `,
      data() {
        return {
          visible: false,
        };
      },
    }, true);
    // wrapper.setData({ visible: false });
    expect(wrapper.find('.za-noticebar').exists()).toBe(false);
  });

  it('visible', () => {
    let result;
    const wrapper = mount({
      components: { ZaNoticeBar },
      template: `
        <za-notice-bar :visible.sync='visible' @click='handleClick' closable>
          noticeBar
        </za-notice-bar>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    wrapper.find('.za-icon-wrong').trigger('click');
    expect(result).toBeDefined();
    expect(wrapper.vm.visible).toBe(false);
  });

  it('scrollable', () => {
    const wrapper = mount({
      components: { ZaNoticeBar },
      template: `
        <za-notice-bar scrollable>自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。自定义icon，自定义主题，显示关闭按钮。</za-notice-bar>
      `,
    }, true);
    const body = wrapper.find('.za-noticebar__body').element;
    expect(body.style.left).not.toBe(0);
  });
});
