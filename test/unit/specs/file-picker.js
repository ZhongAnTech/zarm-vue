import FilePicker from '@/file-picker';
import handleFileInfo from '@/file-picker/src/util';
import { createTest, destroyVM } from '../util';

const file = {
  size: 1024,
  type: 'image/png',
  name: '1.png',
};

describe('FilePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(FilePicker, {
      prefixCls: 'za-filepicker',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      el.querySelector('.za-filepicker-trigger').click();
      expect(el.querySelector('.za-filepicker')).to.exsit;
    });
  });

  it('handleFileInfo', () => {
    handleFileInfo({ file, quality: 80 }, data => {
      expect(data).to.exist;
    });
  });
});
