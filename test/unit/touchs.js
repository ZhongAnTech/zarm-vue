const createEvent = function (type, name) {
  const e = document.createEvent(type || 'Event');
  e.initEvent(name, true, true);
  return e;
};

const dispatchTouch = function (target, name = 'touchstart', touches) {
  const event = createEvent('', name);
  /* eslint-disable-next-line */
  event.touches = event.targetTouches = event.changedTouches = Array.isArray(touches) ? touches : [touches];
  target.dispatchEvent(event);
};

const dispatchTouchStart = function (target, touches) {
  dispatchTouch(target, 'touchstart', touches);
};

const dispatchTouchMove = function (target, touches) {
  dispatchTouch(target, 'touchmove', touches);
};

const dispatchTouchEnd = function (target, touches) {
  dispatchTouch(target, 'touchend', touches);
};

const dispatchSwipe = function (target, touches, duration, cb) {
  if (!Array.isArray(touches)) {
    touches = [touches];
  }
  dispatchTouchStart(target, touches[0]);
  const moveAndEnd = () => {
    dispatchTouchMove(target, touches[1] || touches[0]);
    dispatchTouchEnd(target, touches[2] || touches[1] || touches[0]);
    cb && cb();
  };
  if (duration) {
    setTimeout(moveAndEnd, duration);
  } else {
    moveAndEnd();
  }
};

module.exports = {
  createEvent,
  dispatchTouch,
  dispatchTouchStart,
  dispatchTouchMove,
  dispatchTouchEnd,
  dispatchSwipe,
};
