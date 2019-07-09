import FilePicker from '@/file-picker';
import handleFileInfo from '@/file-picker/src/util';
// import changeImageSize from '@/file-picker/src/changeImageSize';
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

  it('handleClick', () => {
    const wrapper = mount(FilePicker);
    const { vm } = wrapper;
    vm.handleClick();
  });

  it('set multiple is true', () => {
    const wrapper = mount(FilePicker, {
      propsData: {
        multiple: true,
      },
    });
    const { vm } = wrapper;
    vm.handleChange({
      target: {
        files: [file, file],
      },
    });
  });

  it('handleFileInfo', () => {
    handleFileInfo({ file, quality: 80 }, data => {
      expect(data).not.toBeUndefined();
    });
  });

  // it('changeImageSize', () => {
  //   const img = new Image(file.name);
  //   changeImageSize({ img, quality: 80, fileType: file.type }, data => {
  //     expect(data).not.toBeUndefined();
  //   });
  // });
});
