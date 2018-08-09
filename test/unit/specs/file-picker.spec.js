import FilePicker from '@/file-picker';
import handleFileInfo from '@/file-picker/src/util';
import { mount } from '../util';

const file = {
  size: 1024,
  type: 'image/png',
  name: '1.png',
};

describe('FilePicker', () => {
  it('create', () => {
    const wrapper = mount(FilePicker);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(wrapper.find('.za-filepicker')).toBeTruthy();
    });
  });

  it('handleFileInfo', () => {
    handleFileInfo({ file, quality: 80 }, data => {
      expect(data).not.toBeUndefined();
    });
  });
});
