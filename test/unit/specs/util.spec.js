import events from '@/utils/events';
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

const div = document.createElement('div');
let a = 0;
const callback = () => {
  a += 1;
};


describe('utils', () => {
  it('on', done => {
    events.on(div, 'click', callback);
    div.click();
    setTimeout(() => {
      expect(a).toEqual(1);
      done();
    }, 50);
  });
  it('off', done => {
    events.off(div, 'click', callback);
    div.click();
    setTimeout(() => {
      expect(a).toEqual(1);
      done();
    }, 50);
  });
  it('once', done => {
    events.once(div, 'click', callback);
    div.click();
    setTimeout(() => {
      expect(a).toEqual(2);
      done();
    });
  });
  it('defaultThemeValidator', () => {
    const theme = defaultThemeValidator('primary');
    expect(theme).toEqual(true);
  });
  it('enumGenerator', () => {
    const g = enumGenerator(['a', 'b'])('a');
    expect(g).toEqual(true);
  });
});
