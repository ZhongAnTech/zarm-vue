const throttle = (func: any, delay: number) => {
  const _self = this;
  let timer: any;
  let startTime = Date.now();

  function _throttle() {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);
    const context = _self;
    const args = arguments;

    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
  return _throttle;
};

export default throttle;
