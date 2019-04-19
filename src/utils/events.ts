export default {
  on(el: any, type: string, callback: any) {
    if (el.addEventListener) {
      el.addEventListener(type, callback, { passive: false });
    } /* istanbul ignore next  */ else {
      el.attachEvent(`on ${type}`, () => {
        callback.call(el);
      });
    }
  },

  off(el: any, type: string, callback: any) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback, { passive: false });
    } /* istanbul ignore next  */ else {
      el.detachEvent(`off ${type}`, callback);
    }
  },

  once(el: any, type: string, callback: any) {
    const typeArray = type.split(' ');
    const recursiveFunction = (e: any) => {
      e.target.removeEventListener(e.type, recursiveFunction, { passive: false });
      return callback(e);
    };

    for (let i = typeArray.length - 1; i >= 0; i -= 1) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },

  stopPropagation(e: any) {
    e.stopPropagation();
  },
};
