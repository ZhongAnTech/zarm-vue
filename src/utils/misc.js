export function isThenable(obj) {
  return obj && typeof obj.then === 'function';
}

export function warn(msg) {
  console && console.warn && console.warn(msg); // eslint-disable-line
}
