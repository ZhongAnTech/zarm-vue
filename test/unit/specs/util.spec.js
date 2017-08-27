import events from '@/utils/events';

const div = document.createElement('div');
let a = 0;
const callback = () => {
  a += 1;
};

describe('on', () => {
  it('on', done => {
    events.on(div, 'click', callback);
    div.click();
    setTimeout(() => {
      expect(a).to.equal(1);
      done();
    }, 50);
  });
  it('off', done => {
    events.off(div, 'click', callback);
    div.click();
    setTimeout(() => {
      expect(a).to.equal(1);
      done();
    }, 50);
  });
  it('once', done => {
    events.once(div, 'click', callback);
    div.click();
    setTimeout(() => {
      expect(a).to.equal(2);
      done();
    });
  });
});
