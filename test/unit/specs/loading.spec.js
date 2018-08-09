import ZaLoading from '@/loading';
import { mount } from '../util';

describe('Loading', () => {
  it('create', () => {
    const wrapper = mount({
      components: { ZaLoading },
      template: `
        <za-loading ref='loading' :visible.sync='visible'></za-loading>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    expect(wrapper.contains('.za-loading')).toBe(true);
  });

  it('hide', () => {
    const wrapper = mount({
      components: { ZaLoading },
      template: `
        <za-loading :visible.sync='visible'></za-loading>
      `,
      data() {
        return {
          visible: true,
        };
      },
    }, true);
    wrapper.setData({ visible: false });
    expect(wrapper.contains('.za-loading-open')).toBe(false);
  });
});
