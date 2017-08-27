import handleFileInfo from '@/uploader/src/util';

const file = {
  size: 1024,
  type: 'image/png',
  name: '1.png',
};

describe('Uploader', () => {
  it('handleFileInfo', () => {
    handleFileInfo({ file, quality: 80 }, data => {
      expect(data).to.exist;
    });
  });
});
