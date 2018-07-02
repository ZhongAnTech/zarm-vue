import Uploader from '@/uploader';
import handleFileInfo from '@/uploader/src/util';
import { createTest, destroyVM } from '../util';

const file = {
  size: 1024,
  type: 'image/png',
  name: '1.png',
};

describe('Uploader', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Uploader, {
      prefixCls: 'za-uploader',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      el.querySelector('.za-uploader-trigger').click();
      expect(el.querySelector('.za-uploader')).to.exsit;
    });
  });

  it('handleFileInfo', () => {
    handleFileInfo({ file, quality: 80 }, data => {
      expect(data).to.exist;
    });
  });
});
