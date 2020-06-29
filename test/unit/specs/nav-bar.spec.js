import zaNavBar from '@/nav-bar';
import { mount } from '../util';

describe('za-nav-bar', () => {
  it('create', () => {
    const wrapper = mount(zaNavBar, {
      propsData: {
        prefixCls: 'za-navbar',
      },
    });
    expect(wrapper.find('.za-navbar').exists()).toBe(true);
  });

  it('left', () => {
    const wrapper = mount({
      components: { zaNavBar },
      template: `
        <za-nav-bar>
          <div slot="left"><za-icon class="zaIcon01" theme="primary" type="arrow-left" @click="clickHandle"></za-icon></div>
          <div slot="title">这是标题</div>
          <div slot="right"></div>
        </za-nav-bar>
      `,
    }, true);
    expect(wrapper.find('.zaIcon01').exists()).toBe(true);
  });
  it('title', () => {
    const wrapper = mount({
      components: { zaNavBar },
      template: `
        <za-nav-bar>
          <div slot="left"></div>
          <div slot="title"><span class="navBarTitle">这是标题</span></div>
          <div slot="right"><za-icon theme="primary" type="question-round" @click="clickHandle"></za-icon></div>
        </za-nav-bar>
      `,
    }, true);
    expect(wrapper.find('.navBarTitle').exists()).toBe(true);
  });
  it('right', () => {
    const wrapper = mount({
      components: { zaNavBar },
      template: `
        <za-nav-bar>
          <div slot="left"><za-icon theme="primary" type="arrow-left" @click="clickHandle"></za-icon></div>
          <div slot="title">这是标题</div>
          <div slot="right">
            <za-icon class="zaIcon01" theme="primary" type="add" @click="clickHandle"></za-icon>
            <za-icon class="zaIcon02" theme="primary" type="question-round" @click="clickHandle"></za-icon>
          </div>
        </za-nav-bar>
      `,
    }, true);
    expect(wrapper.find('.zaIcon01').exists()).toBe(true);
    expect(wrapper.find('.zaIcon02').exists()).toBe(true);
  });
});
